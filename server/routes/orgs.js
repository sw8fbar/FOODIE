/**
 * Created by ajay on 9/3/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var orgSchema = require('../models/orgs');
var Org = mongoose.model('Org', orgSchema);

router.route('/orgs')
    .get(function (req, res) {
        Org.find(function (err, orgs) {
            if (err) return console.error(err);
            //console.log(groups);
            res.json(orgs);
        })
    })
    .post(function (req, res) {
        var org = new Org();
        org._id = new mongoose.Types.ObjectId;
        org.name = req.body.org.name;
        org.orgId = req.body.org.orgId;
        org.facilities = req.body.org.facilities;
        org.save(function (err) {
            if (err) console.log(err);
            res.json(org);
        })
    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

module.exports = router;