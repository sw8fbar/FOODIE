/**
 * Created by ajay on 9/3/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var orgSchema = require('../models/orgs');
var Org = mongoose.model('Org', orgSchema);

router.route('/orgs/:orgId')
    .get(function (req, res) {
        var query  = Org.where({ "igapakId": req.params.orgId});
        query.findOne(function (err, orgs) {
            if (err) return console.error(err);
            if (orgs) res.json(orgs);
            else console.error({"message":"No facilities found"});
        })
    })
    .post(function (req, res) {
        var org = new Org();
        org._id = new mongoose.Types.ObjectId;
        org.name = req.body.org.name;
        org.logo = req.body.org.logo;
        org.igapakId = req.body.org.igapakId;
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