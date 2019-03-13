const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Mailchimp = require('mailchimp-api-v3'); 
const app = express();
// get ENV variables from .env file in dev
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.MAILCHIMP_LIST_ID;

// Mount the react app
app.use(express.static(path.join(__dirname, '..', 'build')));

// Bodyparser to retrieve form data
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

// MailChimp subscribe path
app.post('/subscribe', function (req, res) {
    const mailchimp = new Mailchimp(api_key);
    mailchimp.post(`lists/${list_id}/members`, {
        email_address: req.body.email,
        status: 'subscribed'
    }).then((result) => {
        res.redirect('/');
    }).catch((error) => {
        return res.send(error);
    });
});
const listener = app.listen(3001, () => {
    console.log('App is running on port', listener.address().port);
});