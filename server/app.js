var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var orgRoutes = require("./routes/orgs");
var facilityRoutes = require("./routes/facilities");

const DevelopmentDB = 'mongodb://localhost/IgapakDB';
const ProdDB = 'mongodb://localhost/IgapakDB';

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '500kb'}));
app.use(bodyParser.urlencoded({ limit: '500kb',extended: false }));
app.use(cookieParser());


/**
 * Development Settings
 */
if (app.get('env') === 'development' || app.get('env') === 'dev') {
    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    //connect to development db
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

/**
 * Production Settings
 */
if (app.get('env') === 'production' || app.get('env') === 'prod') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    //connect to development db
    mongoose.connect(ProdDB);

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

app.use('/api',orgRoutes);
app.use('/api',facilityRoutes);
module.exports = app;
