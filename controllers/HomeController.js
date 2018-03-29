//exportar la vista del inicio

/*module.exports = {

    index : function(req, res, next){
        res.render('home', {title: 'home', layout: '/templates/default'},{
            isAuthenticated : req.isAuthenticated(),
            user : req.user
        });
    }
}*/

let HomeController ={};

HomeController.index = function (req, res,next){
    res.render('home',
        {
            title:'home',
            layout:'/templates/default'}
        )
};

module.exports = HomeController;
/*
var HomeController={};

HomeController.index : function (req, res, next) {
res.render('home', {title: 'home', layout: '/templates/default'},{
    isAuthenticated : req.isAuthenticated(),
    user : req.user
});
}

module.exports = HomeController;
*/