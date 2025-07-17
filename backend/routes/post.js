const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
// Add: POST /, GET /:id, PUT /:id, DELETE /:id...

module.exports = router;
