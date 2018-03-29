var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');


/* GET index page. */

router.get('/', controllers.HomeController.index);

// rutas de usuario

router.get('/auth/signup', controllers.UserController.getSignUp);

router.post('/auth/signup', controllers.UserController.postSignUp);

router.get('/auth/signin', controllers.UserController.getSignIn);

router.post('/auth/signin', passport.authenticate('local', {
    successRedirect : '/',
    failureRedirect : '/auth/signin',
    failureFlash : true
}));

router.get('/auth/logout', controllers.UserController.getLogOut);


module.exports = router;





