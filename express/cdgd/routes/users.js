const express = require('express');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({ message: 'Hello from users' });
});

router.post('/authenticate', function (req, res, next) {

  const USER_CREDENTIALS = [
    { username: 'mike', password: 'password' },
  ];

  const authRequest = req.body;
  const username = authRequest.username;
  const password = authRequest.password;

  const user = _.find(USER_CREDENTIALS, e => (
    e.username === username && e.password === password
  ));

  if (user) {
    user.token = jwt.sign(user, 'somesecretidontcare');
    res.json(user);
  } else {
    res.json({ message: 'bad user' }, 401);
  }

});

module.exports = router;
