const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/user');
const { secretOrKey } = require('./config');

router.get('/', (req, res) => {
  res.json({ message: "testing" });
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password).then(result => {
          if (result) {
            const token = jwt.sign(
              { email },
              secretOrKey,
              { expiresIn: 5 }
            );

            res.json({
              user,
              msg: 'user logged in successfully',
              success: true,
              token
            })
          } else {
            res.json({
              user: null,
              msg: 'password incorrect',
              success: false
            })
          }
        })
      } else {
        res.json({
          user: null,
          msg: 'user does not exist',
          success: false
        })
      }
    }).catch(err => {
      console.log(err);
    })
})

router.post('/signup', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      res.json({
        user: null,
        msg: 'user aleady exist',
        success: false
      });
    } else {
      bcrypt.genSalt().then(salt => {
        bcrypt.hash(password, salt).then(hash => {
          const newUser = new User({ email, password: hash });
          newUser.save().then(user => {
            res.json({
              user,
              msg: 'user registered successfully',
              success: true
            });
          });
        })
      })
    }
  })
})

module.exports = router;