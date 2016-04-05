require.config({

	paths: {

		"jquery": "vendor/jquery/dist/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone",
		"handlebars": "vendor/handlebars/handlebars.amd",

	}



})


require(['views/homeView','resources/model', 'resources/collection'], function(HomeView, Model, Collection){
	var model			= new Model();
	var homeView     	= new HomeView();
	var collection 	 	= new Collection();

	console.log( "the only model's id is: "+model.get('id'));
	console.log(collection.fetch());
})	