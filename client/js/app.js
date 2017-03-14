var app = new Vue({
  el: '#article-app',
  data: {
    slug: '',
    articles: [],
    isEdit: false,
    articleForm: {
      titleInput: '',
      descriptionInput: '',
      slugInput: '',
      oldSlug: '',
      contentInput: ''
    }
  },
  methods: {
    slugConverter: function (text) {
      return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    },
    convertToSlug: function () {
      app.slug = app.slugConverter(app.articleForm.titleInput)
      console.log(app.slug)
    },
    getArticles: function () {
      axios.get('http://localhost:3000/articles')
        .then(function (response) {
          app.articles = response
        })
    },
    createArticle: function () {
      axios.post('http://localhost:3000/articles', {
        title: app.articleForm.titleInput,
        description: app.articleForm.descriptionInput,
        slug: app.slug,
        content: app.articleForm.contentInput
      })
        .then(function (response) {
          app.getArticles()
        // console.log(response)
        })
        .catch(function (err) {
          console.log(err)
        })
    },
    updateArticle: function (slug) {
      axios.put('http://localhost:3000/articles/' + slug, {
        title: app.articleForm.titleInput,
        description: app.articleForm.descriptionInput,
        slug: app.slug,
        content: app.articleForm.contentInput
      })
        .then(function (response) {
          app.getArticles()
        // console.log(response)
        })
        .catch(function (err) {
          console.log(err)
        })
      this.isEdit = false
    },
    editArticle: function (idx) {
      this.isEdit = true
      this.articleForm.titleInput = this.articles.data[idx].title
      this.articleForm.descriptionInput = this.articles.data[idx].description
      this.slug = this.articles.data[idx].slug
      this.articleForm.oldSlug = this.articles.data[idx].slug
      this.articleForm.contentInput = this.articles.data[idx].content
    },
    checkingState: function () {
      if (this.isEdit) {
        this.updateArticle(this.articleForm.oldSlug)
      } else {
        this.createArticle()
      }
    }
  }

})

app.getArticles()
