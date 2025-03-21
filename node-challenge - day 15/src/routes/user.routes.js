const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
const controller = new UserController();

router.post('/', controller.create);
router.get('/', controller.list);
router.put('/:name', controller.update);
router.delete('/:name', controller.delete);

module.exports = router;
