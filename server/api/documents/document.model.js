'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
    name: String,
    path: String,
    type: String,
    assignees: [{
        userId: Schema.Types.ObjectId,
        firstname: String,
        lastname: String
    }],
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
})

// DocumentSchema.pre('save', function(next) {
//     let doc = this;
//     doc.createdAt = date;
//     next();
// });

module.exports = mongoose.model('Document', DocumentSchema);