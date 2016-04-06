define(['backbone'],function(Backbone){

	var CruiseLineModel = Backbone.Model.extend({

		urlRoot: 'https://api.myjson.com/bins/2gr36',
		

		parse: function(data) {

    			return data;
  			}
	});

	return CruiseLineModel;
})