/**
 * Created by ajay on 8/31/14.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Group = require('./group');

var productSchema = new mongoose.Schema({
    _id: { type: Schema.ObjectId },
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'}
});

module.exports = productSchema;
