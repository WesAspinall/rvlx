define(['backbone'],function(Backbone){

	var CruiseLineModel = Backbone.Model.extend({

		data: '../../payload.json',
		

		parse: function(data) {
		
    			return data;
  			}
	});

	return CruiseLineModel;
})