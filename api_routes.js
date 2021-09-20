let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'success',
        message: 'Welcome to Random Asian User API. Use /users to see all the random users!',
    });
});


// Import contact controller
let userController = require('./controller/user_controller');

// Contact routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/users/:name')
    .get(userController.view)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;
