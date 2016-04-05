define(['backbone', 'jquery', 'handlebars', 'resources/collection'], function(Backbone, $, Handlebars, Collection){

	var HomeView = Backbone.View.extend({

		initialize: function(){

			this.render();
			console.log('HomeView rendered!');
		},
		
		render: function(){
			console.log("HomeView is rendering...")
		}

	});

		return HomeView;
});