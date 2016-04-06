require.config({

	paths: {

		"jquery": "libs/jquery/dist/jquery",
		"underscore": "libs/underscore-amd/underscore",
		"backbone": "libs/backbone-amd/backbone",
		"handlebars": "libs/handlebars/handlebars.runtime.amd",
		"hbs": "libs/require-handlebars-plugin/hbs"
	},

});


require(['views/homeView','resources/cruiseLineModel', 'resources/collection'], function(HomeView, CruiseLineModel, Collection){
    

	var cruiseLineModel = new CruiseLineModel();
	var homeView     	= new HomeView();
	var collection 	 	= new Collection();


	

	console.log( "sup from config.js");

})	