


var  mysql = require('mysql');
var bcrypt = require('bcryptjs');

var UserController = {};

UserController.getSignIn = function(req, res, next) {
    var object  ={
        "message" : req.flash('info')

    };
    res.render('users/signin',
        {
            title: 'signin',
            message: req.flash('info'),
            layout: '/templates/default'});
}

UserController.getSignUp = function(req, res, next) {
    return res.render('users/signup', {title: 'signup', layout: '/templates/default'});
}

UserController.postSignUp = function(req, res, next) {

    var salt = bcrypt.genSaltSync(8);

    var password = bcrypt.hashSync(req.body.password, salt);

    var user = {
        email : req.body.email,
        nombre : req.body.nombre,
        password : password
    };

    var config = require('.././database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('INSERT INTO users SET ?', user, function (err, rows, fields) {
        if(err) throw err;
        db.end();
    });
    req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesión');
    return res.redirect('/');
}

UserController.getLogOut = function (req, res, next) {
    res.render('error', {
        title: 'Agencia Viajes',
        layout: '/templates/notFoundLayout'
    });
}



module.exports = UserController;









/*
module.exports = {


    getSignUp: function (req, res, next) {
        return res.render('users/signup', {title: 'signup', layout: '/templates/default'});
    },

    postSignUp: function (req, res, next) {

         var salt = bcrypt.genSaltSync(8);

        var password = bcrypt.hashSync(req.body.password, salt);

        var user = {
            email : req.body.email,
            nombre : req.body.nombre,
            password : password
        };

        var config = require('.././database/config');
        var db = mysql.createConnection(config);
        db.connect();
        db.query('INSERT INTO users SET ?', user, function (err, rows, fields) {
            if(err) throw err;
            db.end();
        });
        //req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesión');
        return res.redirect('/auth/signin');

    },

    getSignIn : function (req, res, next) {
        return res.render('users/signin',{title: 'signin', layout: '/templates/default'}, {message: req.flash('info')});
    }




}*/