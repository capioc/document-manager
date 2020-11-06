'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    // createdAt: { type: Date, default: Date.now },
    // modifiedAt: { type: Date, default: Date.now }
})

// UserSchema.pre('save', function(next) {
//     let doc = this;
//     doc.createdAt = date;
//     next();
// });

module.exports = mongoose.model('User', UserSchema);