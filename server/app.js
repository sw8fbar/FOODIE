var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var morgan = require('morgan');
var session = require('express-session');


var orgRoutes = require("./routes/orgs");
var facilityRoutes = require("./routes/facilities");
var yelpRoutes = require("./routes/yelp");

const DevelopmentDB = 'mongodb://localhost/IgapakDB';
const ProdDB = 'mongodb://54.165.174.90:27017/IgapakDB';

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ limit: '1mb',extended: false }));
app.use(cookieParser());

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    //add other code if necessary - logging currently done by morgan
    console.log(req.body);
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/',router);
app.use('/api',orgRoutes);
app.use('/api',facilityRoutes);
app.use('/api',yelpRoutes);

app.use(session({
    secret: 'mouse catwoman',
    cookie: { secure: true }
}));

/**
 * Production Settings
 */
if (app.get('env') == 'production' || app.get('env') == 'prod') {

    app.use(morgan('combined'));
    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    //connect to development db
    mongoose.connect(ProdDB);

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error', {
            message: err.message,
            error: {}
        });
    });
}

/**
 * Development Settings
 */
if (app.get('env') == 'development' || app.get('env') == 'dev') {

    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    //connect to development db
    app.use(morgan('combined'));
    mongoose.connect(DevelopmentDB);

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
