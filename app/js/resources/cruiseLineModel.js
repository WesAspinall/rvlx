define(['backbone'],function(Backbone){

	var CruiseLineModel = Backbone.Model.extend({
		url: 'https://api.myjson.com/bins/2gr36',
		data: '../../payload.json',
		

		parse: function(data) {
		
    			return data;
  			}
	});

	return CruiseLineModel;
})