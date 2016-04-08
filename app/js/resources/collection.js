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
            

            // var lowPrice = [{starting_at_price: 198},{starting_at_price: 300 }, {starting_at_price: 250}];
            


            //drill into collection json obj to isolate 
            //an array sailing options objects
            _.each(sailings,function(sailings){
                lowPrice.push(sailings.sailing_options)
            })

           //parsing out arrays for sorting and reassembly into
           // an array for use on line 98
            var blueberries = _.first(lowPrice);
            var cherries = [];

            var pizza = lowPrice[1];
            var beer = [];

            var tacos = _.last(lowPrice);
            var salsa = []

            for(i=0; i<blueberries.length; i++){
                cherries.push(blueberries[i].sailing_price)
            }

             for(i=0; i<lowPrice.length; i++){
                beer.push(pizza[i].sailing_price)
            }
            console.log(beer);

            for(i=0; i<tacos.length; i++){
                salsa.push(tacos[i].sailing_price)
            }

            //new starting at price obj
            var deal = [{starting_at_price: _.min(cherries)},
            {starting_at_price: _.min(beer)},
            {starting_at_price: _.min(salsa)}]






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
    		for(let i = 0; i<arr.length; i++){
	    		_.defaults(arr[i],sailings[i], deal[i]);
    		}    

    		return arr;
		}


	});


	return Collection;



})
