/**
 * Created by ajay on 9/3/14.
 */
/**
 * Created by ajay on 9/3/14.
 */

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    facilitySchema = require('./facilities');


var langSchema = new mongoose.Schema({
  id: {type: String},
  label: {type: String},
  flag: {type: String},
  round: {type: String}
});

// User will select org (comes with facility) and then facility
// selecting facility will get all articles corresponding to that facility
var orgSchema = new mongoose.Schema({
    _aID: { type: Schema.ObjectId },
    igapakId: {type: Number},
    name: {type: String},
    street: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String},
    country: {type: String},
    phone: {type: String},
    sendOrder: {type: Boolean},
    active: {type: Boolean},
    facilities: [facilitySchema],
    logo: {type: String},
    yelpId: {type: String},
    languages: [langSchema]
});

module.exports = orgSchema;
