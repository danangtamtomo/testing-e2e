const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
const Article = require('../models/Article')
const jwt = require('jsonwebtoken')

chai.use(chaiHttp)

describe('Test request to the server:', function () {
  // it('Should save an article to the database by posting request to /articles', function (done) {
  //   chai.request('http://localhost:3000')
  //     .post('/articles')
  //     .send({
  //       title: 'Hello World',
  //       description: 'This is Hell-o World',
  //       content: 'Lorem Ipsum Dolor Sit Amet',
  //       slug: 'hello-world'
  //     })
  //     .end(function (err, res) {
  //       res.status.should.equal(200)
  //       Article.findOne({
  //         title: 'Hello World',
  //         content: 'Lorem Ipsum Dolor Sit Amet',
  //         slug: 'hello-world'
  //       }).then(function (article) {
  //         article.title.should.equal('Hello World')
  //         article.description.should.equal('This is Hell-o World')
  //         article.content.should.equal('Lorem Ipsum Dolor Sit Amet')
  //         article.slug.should.equal('hello-world')
  //       }).catch(function (err) {
  //         console.log(err)
  //       })
  //       done()
  //     })
  // })
  //
  // it('Should get an article that saved before in the database by getting request to /articles', function (done) {
  //   chai.request('http://localhost:3000')
  //     .get('/articles')
  //     .end(function (err, res) {
  //       res.status.should.equal(200)
  //       Article.findOne({
  //         title: 'Hello World',
  //         content: 'Lorem Ipsum Dolor Sit Amet',
  //         slug: 'hello-world'
  //       }).then(function (article) {
  //         article.title.should.equal('Hello World')
  //         article.description.should.equal('This is Hell-o World')
  //         article.content.should.equal('Lorem Ipsum Dolor Sit Amet')
  //         article.slug.should.equal('hello-world')
  //       })
  //       done()
  //     })
  // })

  // it('Should update an article by putting request to /articles', function (done) {
  //   chai.request('http://localhost:3000')
  //     .put('/articles/hello-world')
  //     .send({
  //       title: 'Hello World',
  //       description: 'This is Hell The World',
  //       content: 'Lorem Ipsum Dolor Sit Hell',
  //       slug: 'hello-world'
  //     })
  //     .end(function (err, res) {
  //       res.status.should.equal(200)
  //       Article.findOne({
  //         title: 'Hello World',
  //         description: 'This is Hell The World',
  //         content: 'Lorem Ipsum Dolor Sit Hell',
  //         slug: 'hello-world'
  //       }).then(function (article) {
  //         article.title.should.equal('Hello World')
  //         article.description.should.equal('This is Hell The World')
  //         article.content.should.equal('Lorem Ipsum Dolor Sit Hell')
  //         article.slug.should.equal('hello-world')
  //       })
  //       .catch(function (err) {
  //         console.log(err)
  //       })
  //       done()
  //     })
  // })

  // it('Should get an article that saved before in the database by getting request to /articles', function (done) {
  //   chai.request('http://localhost:3000')
  //     .delete('/articles/hello-world')
  //     .end(function (err, res) {
  //       res.status.should.equal(200)
  //       res.body.message.should.equal('An article has been deleted')
  //       done()
  //     })
  // })

  it('Should get token when logging in is success', function (done) {
    chai.request('http://localhost:3000')
      .post('/auth/login')
      .send({
        username: 'danangtamtomo',
        password: 'sayadanang'
      })
      .end(function (err, res) {
        if (err) console.log(err)
        else {
          jwt.verify(res.body.token, 'danangtamtomo')
            .username
            .should
            .equal('danangtamtomo')
        }
        done()
      })
  })
})
