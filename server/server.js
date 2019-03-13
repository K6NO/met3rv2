const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').load();
const Mailchimp = require('mailchimp-api-v3'); 
const app = express();
const list_id = '4da4e46a7d';

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.get('/zengrid', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/zenfleet', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.post('/subscribe', function (req, res) {
    
    const mailchimp = new Mailchimp(api_key);
    console.log('submit', mailchimp);
    console.log('email', req.body.email);
    mailchimp.post(`lists/${list_id}/members`, {
        email_address: req.body.email,
        status: 'subscribed'
    }).then((result) => {
        console.log(result, 'Thank you for subscribing');
        res.redirect('/');
    }).catch((error) => {
        return res.send(error);
    });
});
const listener = app.listen(3001, () => {
    console.log('App is running on port', listener.address().port);
});