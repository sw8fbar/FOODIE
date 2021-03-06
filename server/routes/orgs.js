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
        console.log(req.headers.clientid);
        //var query  = Org.where({ "igapakId": req.params.orgId});
        Org.find(function (err, orgs) {
            if (err) return console.error(err);
            res.json(orgs);
        })
    })
    .post(function (req, res) {
        var org = new Org();
        org._id = new mongoose.Types.ObjectId;
        org.name = req.body.org.name;
        org.logo = req.body.org.logo;
        org.igapakId = req.body.org.igapakId;
        org.yelpId = req.body.org.yelpId;
        org.facilities = req.body.org.facilities;
        org.street = req.body.org.street;
        org.city = req.body.org.city;
        org.state = req.body.org.state;
        org.zip = req.body.org.zip;
        org.country = req.body.org.country;
        org.phone = req.body.org.phone;
        org.sendOrder = req.body.org.sendOrder;
        org.active = req.body.org.active;
        org.languages = req.body.org.languages;
        org.save(function (err) {
            if (err) console.log(err);
            res.json(org);
        })
    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

router.route('/orgs/:igapakId')
    .get(function (req, res) {
        var query  = Org.where({ "igapakId": req.params.igapakId});
        query.findOne(function (err, orgs) {
            if (err) return console.error(err);
            if (orgs) res.json(orgs);
            else console.error({"message":"No Orgs found"});
        })
    })
    .delete(function(req, res){
        var query  = Org.where({ "igapakId": req.params.igapakId});
        query.findOneAndRemove(function (err, orgs) {
            if (err) return console.error(err);
            if (orgs) res.json(orgs);
            else console.error({"message":"No Orgs found"});
        })
    });

module.exports = router;