'use strict';

const documentService = require('./document.service');

exports.index = async function (req, res) {
    try {
        const documents = await documentService.getDocumentsAll();
        res.send(documents);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
};

exports.create = async function (req, res) {
    try {
        console.log(req.body)
        const document = req.body;
        let newDocument = await documentService.createDocument(document);
        res.send(newDocument);
    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong');
    }
}