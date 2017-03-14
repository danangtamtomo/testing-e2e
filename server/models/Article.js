const mongoose = require('mongoose')

var ArticleSchema = mongoose.Schema({
  title: String,
  description: String,
  content: String,
  slug: String
}, {
  timestamps: true
})

var Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
