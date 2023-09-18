var express = require('express');
var router = express.Router();

// controllers
const category_controller = require("../controllers/categoryController");

/* GET categories */
router.get('/', category_controller.index);

router.get('/:id', category_controller.category_list);

module.exports = router;