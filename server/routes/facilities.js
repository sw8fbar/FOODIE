/**
 * Created by ajay on 9/3/14.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var facilitySchema = require('../models/facilities');
var Facility = mongoose.model('Facility', facilitySchema);

router.route('/facilities')
    .get(function (req, res) {
        Facility.find(function (err, facilities) {
            if (err) return console.error(err);
            //console.log(groups);
            res.json(facilities);
        })
    })
    .post(function (req, res) {
        var facility = new Facility();
        facility._id = new mongoose.Types.ObjectId;
        facility.name = req.body.facility.name;
        facility.igapakId = req.body.facility.igapakId;
        facility.articles = req.body.facility.articles;
        facility.save(function (err) {
            if (err) console.log(err);
            res.json(facility);
        })
//        res.send(req.body.facility);
    })
    .put(function (req, res) {

    })
    .delete(function (req, res) {

    });

module.exports = router;