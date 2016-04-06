define(['backbone','resources/cruiseLineModel'],function(Backbone, CruiseLineModel){

	var Collection = Backbone.Collection.extend({


		url: 'https://api.myjson.com/bins/2gr36',

		model: CruiseLineModel,


		parse: function(data) {

    			return data;
  			}
		
	});


	return Collection;



})
