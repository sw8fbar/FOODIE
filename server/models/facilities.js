/**
 * Created by ajay on 9/3/14.
 */

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

// User will select org (comes with facility) and then facility
// selecting facility will get all articles corresponding to that facility

var nameSchema = new mongoose.Schema({
    langId: {type: Number},
    label: {type: String}
});

var productSchema = new mongoose.Schema({
    productId: { type: Number },
    name: [nameSchema],
    description: [nameSchema],
    servingSize:{type: Number},
    price: {type: Number}
});

var groupSchema = mongoose.Schema({
    groupId: { type: Number },
    name: [nameSchema],
    subgroups: [groupSchema],
    products: [productSchema]
});

var articleSchema = new mongoose.Schema({
    articleId: {type: Number},
    name: [nameSchema],
    groups: [groupSchema]
});

var facilitySchema = new mongoose.Schema({
    facilityId: {type: Number},
    name: {type: String},
    articles: [articleSchema]
});

module.exports = facilitySchema;
