var express = require('express')
var router = express.Router()
var jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/auth/login', function (req, res, next) {
  if (req.body.username === 'danangtamtomo' && req.body.password === 'sayadanang') {
    res.json({token: jwt.sign({username: req.body.username}, 'danangtamtomo')})
  }
})

module.exports = router
