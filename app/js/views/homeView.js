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

            $('input[name="date"]').click(function(){
              var $radio = $(this);

                // if this was previously checked
                if ($radio.data('waschecked') == true)
                {
                    $radio.prop('checked', false);
                    $radio.data('waschecked', false);
                }
                else
                    $radio.data('waschecked', true);

                // remove was checked from other radios
                $radio.siblings('input[name="date"]').data('waschecked', false);
            });

          });
        }  


    

    })

    return HomeView;
});