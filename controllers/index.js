//script para cargar automáticamente todos los controladores

var fs = require('fs');
var path = require('path');

var files = fs.readdirSync(__dirname); //todos los controladores se guardan en la variable 'files'

files.forEach(function(file){
    var fileName = path.basename(file, '.js');

    if(fileName !== 'index'){
        exports[fileName] = require('./'+ fileName);
    }
});