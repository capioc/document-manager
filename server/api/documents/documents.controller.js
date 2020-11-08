'use strict';

const documentService = require('./document.service');

exports.index = async function (req, res) {
    try {
        console.log(req.query);
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        const documents = await documentService.getDocumentsAll(skip, limit);
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

exports.collectionSize = async function (req, res) {
    try {
        const size = await documentService.getCollectionSize();
        res.json(size);
    } catch (error) {
        console.log(error);
        return 'error';
    }
}

exports.destroy = async function (req, res) {
    try {
        const result = await documentService.deleteDocument(req.params.id)
        if (result.deletedCount === 1) {
            console.dir("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query. Deleted 0 documents.");
          }
        res.json(result)
    } catch (error) {
        
    }
}