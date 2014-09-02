/**
 * Created by ajay on 8/31/14.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Product = require('./product');

var GroupSchema = mongoose.Schema({
    //_id: { type: Schema.ObjectId },
    name: { type: String },
    subgroups: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Group'
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }]
});

module.exports = GroupSchema;
