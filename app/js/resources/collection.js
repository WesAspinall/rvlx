define(['backbone', 'underscore','resources/cruiseLineModel'],function(Backbone, _, CruiseLineModel){

	var Collection = Backbone.Collection.extend({


		url: '../../payload.json',

		model: CruiseLineModel,

		//using parse function to 
		//restructure data to make it
		//more usable without using
		//any custom Handlebars helpers
		parse: function(data) {

			//parse out data
			var cruiseLines = data.cruise_lines;
			var sailings = data.sailings;
			//new array
			var arr = [];
            var answer = [{starting_at_price: 198},{starting_at_price: 300 }, {starting_at_price: 250}];
			
    		//put all old objects in one array
    		var extendo = _.union(cruiseLines,sailings);


    		//create 3 new objs and fill in cruise data
    		_.each(extendo,function(extendo){
    			var cruise_line_name = extendo.cruise_line_name;
    			var cruise_ship_name = extendo.cruise_ship_name;
    			var sailing_name = extendo.sailing_name;
    			var sailing_main_image = extendo.sailing_main_image;
    			var sailing_options = extendo.sailing_options;
                var starting_at_price = extendo.starting_at;
    			if(cruise_line_name && cruise_ship_name){
    				arr.push({
    					cruise_line_name,
    					cruise_ship_name,
    					sailing_name,
    					sailing_main_image,
                        starting_at_price,
                        sailing_options,
    				});
    			}
    		});

        

    		//finally, fill in sailing data to those 3 objects
    		for(let i = 0; i<arr.length; i++){
	    		_.defaults(arr[i],sailings[i], answer[i]);
    		}    

    		return arr;
		}


	});


	return Collection;



})
