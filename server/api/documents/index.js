const express = require('express');
const controller = require('./documents.controller');
// const auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
// router.get('/:id', controller.show);
router.get('/size', controller.collectionSize);
router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;