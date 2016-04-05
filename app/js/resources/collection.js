define(['backbone','resources/model'],function(Backbone, Model){

	var Collection = Backbone.Collection.extend({

		url: 'https://api.myjson.com/bins/2gr36',

		model: Model,


		parse: function(data) {
				console.log(data);
    			return data;
  			}
		
	});

	return Collection;



})
