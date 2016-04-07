define([
  'backbone',
  'jquery',
  'underscore',
  'handlebars',
  'resources/collection',
  'hbs!views/templates/precomp'
], function(Backbone, $, _, Handlebars, Collection, Template){

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

          });
        },




    })

    return HomeView;
});