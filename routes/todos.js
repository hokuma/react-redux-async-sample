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

router.post('/', function(req, res, next) {
    var todo = req.body;
    todo.id = TODOS.length + 1;
    todo.status = 0;
    TODOS.push(
        todo
    );
    res.json({todo: todo});
});

module.exports = router;
