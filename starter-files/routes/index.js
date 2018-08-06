const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
