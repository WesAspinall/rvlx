define(['backbone', 'jquery'], function(Backbone, $){

	var HomeView = Backbone.View.extend({

		initialize: function(){
			var appElement = $('.app');

			appElement.html('test');

		}

	});

		return HomeView;
});