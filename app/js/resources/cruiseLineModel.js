define(['backbone'],function(Backbone){

	var CruiseLineModel = Backbone.Model.extend({

		urlRoot: '../../payload.json',
		

		parse: function(data) {
		
    			return data;
  			}
	});

	return CruiseLineModel;
})