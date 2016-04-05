require.config({

	paths: {

		"jquery": "vendor/jquery/dist/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone",
		"handlebars": "vendor/jquery/handlebars",

	}



})


require(['views/homeView', 'resources/ajax'], function(HomeView){

	new HomeView;

})