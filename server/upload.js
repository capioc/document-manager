const IncomingForm = require('formidable').IncomingForm;
const documentService = require('./api/documents/document.service');

module.exports = function upload(req, res) {
    let form = new IncomingForm();
    const documentsUploaded = [];
    let assignedUsers;

    form.on('field', async (fieldName, fieldValue) => {
        // form.emit('data', { name: 'field', key: fieldName, value: fieldValue });
        try {
            console.log(fieldName, fieldValue)
            assignedUsers = await JSON.parse(fieldValue);
            
        } catch (error) {
            console.log('field error', error)
        }

    });

    form.on('file', async (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
        console.log(file.path, file.name, file.type);
        let d = {
            path: file.path,
            name: file.name,
            type: file.type,
            assignees: assignedUsers
        }
        let document = await documentService.createDocument(d)
        documentsUploaded.push(document);
    });
    form.on('end', () => {
        res.json(documentsUploaded);
    })
    form.parse(req);
}