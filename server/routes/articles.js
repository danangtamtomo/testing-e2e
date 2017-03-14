var express = require('express')
var router = express.Router()
const ArticleController = require('../controllers/ArticleController')

router.get('/', ArticleController.getArticles)
router.get('/:id', ArticleController.getArticle)
router.post('/', ArticleController.createArticle)
router.put('/:slug', ArticleController.updateArticle)
router.delete('/:slug', ArticleController.deleteArticle)

module.exports = router
