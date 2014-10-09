/**
 * Created by ajay on 9/3/14.
 */

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

// User will select org (comes with facility) and then facility
// selecting facility will get all articles corresponding to that facility

var nameSchema = new mongoose.Schema({
    langId: {type: String},
    label: {type: String}
});

var productSchema = new mongoose.Schema({
    igapakId: { type: Number },
    seqNum: { type: Number },
    name: [nameSchema],
    description: [nameSchema],
    servingSize:{type: Number},
    price: {type: Number}
});

var groupSchema = mongoose.Schema({
    igapakId: { type: Number },
    name: [nameSchema],
    groups: [groupSchema],
    products: [productSchema]
});

var articleSchema = new mongoose.Schema({
    igapakId: {type: Number},
    name: [nameSchema],
    groups: [groupSchema]
});

var facilitySchema = new mongoose.Schema({
    igapakId: {type: Number},
    name: {type: String},
    defaultLanguage: {type: Number},
    articles: [articleSchema],
    currencyId: {type: String}
});

module.exports = facilitySchema;
