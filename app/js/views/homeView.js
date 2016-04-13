define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'resources/collection',
  'hbs!views/templates/precomp'
], function($, _, Backbone,Handlebars, Collection, Template){

    var HomeView = Backbone.View.extend({
        
        initialize: function(){

          this.render();

        },


        render: function(data) {
          var collection = new Collection();

          var arr = [];

          collection.fetch().then(function(){
            //get json obj
            var data = collection.toJSON();
       
             console.log(data);
           
            //pass template the data and print it on the page
            document.body.innerHTML=Template(data);


            //calculates grand total and puts it at the bottom
            function grandTotal(){
              var sum = 0;
              $('.sum').each(function(){
                sum += parseInt($(this).html() || 0);
                 $('#grandtotal').html(sum);
              })
            }

             //updates sum of listings
            function sumUpdate(){
              $('.dateInput').each(function () { 
                var checked = $(this).attr('checked');
                if (!checked) {
                  var selectedPrice = 0;
                  $(this).parent().siblings('.sum').html(selectedPrice);
                  grandTotal();
                } else {
                  var selectedPrice = $(this).parent().siblings('.priceLi').text();
                  $(this).parent().siblings('.sum').html(selectedPrice);
                  grandTotal();
                }
              })
            } 


            //toggles radio buttons on and off
            //removes sibling checked attribute
            $('.dateInput').on('click', function(){
              var checked = $(this).attr('checked');

              $(this).attr('checked', !checked);
              $(this).closest('.datePrice').siblings('.datePrice').find('.dateInput').removeAttr('checked');
              sumUpdate();
          
            })

           }) //end of .then
         } //end of render
  
  })
    return HomeView;
});