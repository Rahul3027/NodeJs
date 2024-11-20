const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/public/session.html');
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile(__dirname+'/JSON/login.json', (err, data) => {
        if (err) throw err;

        let users = JSON.parse(data);
        let userFound = false;
        for (let user in users) {
            if (users[user].username === username && users[user].password === password) {
                userFound = true;
                req.session.user = username;
                return res.redirect('/dashboard');
            }
        }
        if (!userFound) {
            res.send('<script>alert("User does not exist or password is incorrect"); window.location.href = "/";</script>');
        }
    });
});

app.get('/dashboard', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/');
    }
    res.send(`<h1>Welcome, ${req.session.user}!</h1><a href="/logout">Logout</a>`);
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/dashboard');
        }
        res.redirect('/');
    });
});

app.listen(PORT, () => {
    console.log("Server running" );
});
