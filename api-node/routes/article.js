'use strict'


var express           = require('express')
var ArticleController = require('../controllers/article');
var router            = express.Router();

router.post('/save', ArticleController.save);
router.get('/articles', ArticleController.getArticles);

module.exports = router;

