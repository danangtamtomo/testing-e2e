const Article = require('../models/Article')

var ArticleController = {}

ArticleController.getArticles = function (req, res, next) {
  Article.find({})
    .then(function (articles) {
      res.send(articles)
    })
}

ArticleController.getArticle = function (req, res, next) {
  Article.find({
    _id: req.params.id
  })
    .then(function (article) {
      res.send(article)
    })
}

ArticleController.createArticle = function (req, res, next) {
  var article = new Article(req.body)
  article.save()
    .then(function (article) {
      res.send({
        status: 'Ok',
        message: 'New article has been created',
        article: article
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

ArticleController.updateArticle = function (req, res, next) {
  Article.update({
    slug: req.params.slug
  }, {
    $set: req.body
  })
    .then(function (err, article) {
      res.send({
        status: 'Ok',
        message: `The article has been updated`,
        updated_article: article
      })
    })
}

ArticleController.deleteArticle = function (req, res, next) {
  Article.remove({
    slug: req.params.slug
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `An article has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}
module.exports = ArticleController
