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
        //var query  = Facility.where({ "igapakId": '1', "articles.igapakId": '1'});
        Facility.find(function (err, facilities) {
            if (err) return console.error(err);
            res.json(facilities);

        })
    })
    .post(function (req, res) {
        var facility = new Facility();
        facility._id = new mongoose.Types.ObjectId;
        facility.name = req.body.facility.name;
        facility.igapakId = req.body.facility.igapakId;
        facility.articles = req.body.facility.articles;
        facility.defaultLanguage = req.body.facility.defaultLanguage;
        facility.currencyId = req.body.facility.currencyId;
        facility.save(function (err) {
            if (err) console.log(err);
            res.json(facility);
        })
//        res.send(req.body.facility);
    })
    .put(function (req, res) {

    });

router.route('/facilities/:igapakId')
    .get(function (req, res) {
        var query = Facility.where({ "igapakId": req.params.igapakId });
        query.findOne(function (err, facilities) {
            if (err) console.error({"message": "facility " + req.params.igapakId + " not found "+ err});
            if (facilities) res.json(facilities);
            else res.json({"message": "facility " + req.params.igapakId + " not found"});
        })
    })
    .delete(function (req, res) {
        var query = Facility.where({ "igapakId": req.params.igapakId });
        query.findOneAndRemove(function (err, facilities) {
            if (err) console.error({"message": "facility " + req.params.igapakId + " not found "+ err});
            if (facilities) res.json({"message": "facility " + req.params.igapakId + " deleted"});
            else res.json({"message": "facility " + req.params.igapakId + " not found"});
        })
    });

router.route('/facilities/:facilityId/articles/:articleId')
    .get(function (req, res) {
        var query  = Facility.where({ "igapakId": req.params.facilityId, "articles.igapakId": req.params.articleId});
        query.findOne(function (err, facilities) {
            if (err) return console.error(err);
            if (facilities) {
                //console.log(JSON.stringify(facilities));
                res.json(facilities);
            }
            else console.error({"message":"No facilities found"});
        })
    });

module.exports = router;