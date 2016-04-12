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
              var sum = 0;
              $('.sum').each(function(){
                sum += parseInt($(this).html() || 0);
                 $('#grandtotal').html(sum);
              })
            }

            
            $('.dateInput').on("click", function () { 
              var a = 'checked';
              var b = !$(this).attr('checked');
              $(this).attr(a, b);
            });

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