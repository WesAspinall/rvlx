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

          collection.fetch().then(function(){
            //get json obj
            var data = collection.toJSON();
       
             console.log(data);
           
            //pass template the data and print it on the page
            document.body.innerHTML=Template(data);


            //calculates total and puts it at the bottom
            function runTotal(){
              "use strict";
              var input1 = parseInt($('.sum1').html() || 0);
              var input2 = parseInt($('.sum2').html() || 0);
              var input3 = parseInt($('.sum3').html() || 0);
              $('#grandtotal').html(input1+input2+input3);
            }

            //price getting
           $('.dateLi5').on('click',function(){
              var selectedPrice = $(this).siblings('li').text();
             $('.sum1').html(selectedPrice);
              runTotal();
            }),
            
             $('.dateLi8').on('click',function(){
              var selectedPrice = $(this).siblings('li').text();
             $('.sum2').html(selectedPrice);
              runTotal();
            }),

             $('.dateLi1').on('click',function(){
              var selectedPrice = $(this).siblings('li').text();
              $('.sum3').html(selectedPrice);
               runTotal();
            })

           })
        }
  
  })
    return HomeView;
});