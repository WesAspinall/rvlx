define(['backbone'],function(Backbone){

	var Model = Backbone.Model.extend({

		urlRoot: 'https://api.myjson.com/bins/2gr36',
		defaults:{

			id: '2gr36'	
		}

	});

	return Model;
})