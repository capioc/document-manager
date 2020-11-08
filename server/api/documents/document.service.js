'use strict';
const Document = require('./document.model');

exports.createDocument = async function (document) {
    try {
        const newDocument = await new Document(document).save();
        console.log("doc saved",newDocument)
        return newDocument;
    } catch (error) {
        console.log('Document not saved', error);
        return 'error';
    }
}

exports.getDocumentsAll = function (skip = 0, limit = 5) {
    try {
        return Document.find({})
                        .sort({ createdAt: -1 })
                        .skip(skip)
                        .limit(limit);

    } catch (error) {
        console.log(error);
        return 'error';
    }
}

exports.getCollectionSize = function () {
    try {
        return Document.countDocuments()
    } catch (error) {
        console.log(error);
        return 'error';
    }
}

exports.deleteDocument = function (id) {
    try {
        return Document.deleteOne({_id: id})
    } catch (error) {
        console.log(error);
        return 'error';
    }
}