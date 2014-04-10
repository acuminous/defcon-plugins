var express = require('express');
var exphbs = require('express3-handlebars');
var path = require('path');
var _ = require('lodash');
var packageJson = require('./package.json');

module.exports.create = create;

function create(context, next) {

    var config = context.config;
    var staticDir = path.join(__dirname, 'static');
    var templateDir = path.join(staticDir, 'templates');
    var viewsDir = path.join(templateDir, 'views');

    var app = express();
    app.disable('x-powered-by');
    app.disable('view cache');    
    app.set('view engine', 'handlebars');
    app.set('views', viewsDir);

    var plugin = {
        name: 'Plugins',
        description: packageJson.description,
        repositoryUrl: packageJson.repository.url,
        ui: true,
        icon: 'fa fa-puzzle-piece',
        app: app,
        resources: {
            js: ['dist/js/bundle-libs.js', 'dist/js/bundle.js'],
            css: ['dist/css/bundle-libs.css', 'dist/css/bundle.css']
        }                  
    }    

    app.engine('handlebars', exphbs(_.defaults({
        partialsDir: viewsDir
    }, context.handlebarsConfig)));

    app.get('/', function(req, res) {
        res.render('plugins', { 
            pageId: packageJson.name,                 
            config: config,                
            defcon: context.defcon,
            plugin: plugin
        });
    })

    app.use('/', express.static(staticDir));       

    next(null, plugin);
}