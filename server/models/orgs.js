/**
 * Created by ajay on 9/3/14.
 */
/**
 * Created by ajay on 9/3/14.
 */

var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    facilitySchema = require('./facilities');


// User will select org (comes with facility) and then facility
// selecting facility will get all articles corresponding to that facility

var orgSchema = new mongoose.Schema({
    _id: { type: Schema.ObjectId },
    orgId: {type: Number},
    name: {type: String},
    facilities: [facilitySchema],
    logo: {type: String}
});

module.exports = orgSchema;
