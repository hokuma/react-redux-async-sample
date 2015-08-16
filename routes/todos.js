var express = require('express');
var router = express.Router();

var TODOS = [
  {
    id: 1,
    text: "Drink beer",
    status: 0
  }
]
router.get('/', function(req, res, next) {
  res.json({todos: TODOS});
});

module.exports = router;
