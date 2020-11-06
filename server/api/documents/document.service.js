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

exports.getDocumentsAll = async function () {
    try {
        const documents = await Document.find();
        return documents;
    } catch (error) {
        console.log(error);
        return 'error';
    }
}