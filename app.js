const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const upload = require('express-fileupload');

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

//upload files Middleware 
app.use(upload());

// Routes for the Home Page
const homeRouter = require('./routes/home/homeRouter');
app.use('/', homeRouter);


// Listening on Port
app.listen(4500, () => {
    console.log('Listening on Port 4500');
});