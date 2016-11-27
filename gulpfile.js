var elixir = require('laravel-elixir')
var path = require('path')

var resolveSassFolder = function(filename){
	return path.join('./src', 'sass', filename);
}

elixir(function(mix){

	mix.sass('./src/sass/home.scss');
	mix.sass('./src/sass/login.scss');


	mix.webpack('./src/bundle.js');
	mix.webpack('./src/login.js');
})