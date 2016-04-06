define([
  'backbone',
  'jquery',
  'handlebars',
  'resources/collection',
  'hbs!views/templates/precomp'
], function(Backbone, $, Handlebars,Collection, Template){

    var HomeView = Backbone.View.extend({
        
        initialize: function(){

          this.render();
        },

        render: function() {
          
          var collection = new Collection();

          collection.fetch().then(function(){
            var data = collection.toJSON();
            document.body.innerHTML=Template(data[0]);
          });
        
      

        }
    })

    return HomeView;
});