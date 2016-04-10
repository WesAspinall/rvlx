define(['backbone', 'underscore','resources/cruiseLineModel'],function(Backbone, _, CruiseLineModel){

	var Collection = Backbone.Collection.extend({

        url: 'https://api.myjson.com/bins/2gr36',

		data: '../../payload.json',

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
            var lowPrice = [];
                        

            //drill into collection json obj to isolate 
            //an array sailing options objects
            _.each(sailings,function(sailings){
                lowPrice.push(sailings.sailing_options)
            })

           //parsing out arrays for sorting and reassembly into
           // an array for use on line 98
            var cruiseLine1 = _.first(lowPrice);
            var array1 = [];

            var cruiseLine2 = lowPrice[1];
            var array2 = [];

            var cruiseLine3  = _.last(lowPrice);
            var array3 = []

            for(i=0; i<cruiseLine1.length; i++){
                array1.push(cruiseLine1[i].sailing_price)
            }

             for(i=0; i<lowPrice.length; i++){
                array2.push(cruiseLine2[i].sailing_price)
            }

            for(i=0; i<cruiseLine3.length; i++){
                array3.push(cruiseLine3[i].sailing_price)
            }

    
            //new starting at price obj
            var deal = [{starting_at_price: _.min(array1)},
            {starting_at_price: _.min(array2)},
            {starting_at_price: _.min(array3)}]






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

        

    		//finally, fill in sailing data and start price data to those 3 objects
    		for(var i = 0; i<arr.length; i++){
	    		_.defaults(arr[i],sailings[i], deal[i]);
    		}    

    		return arr;
		}


	});


	return Collection;



})
