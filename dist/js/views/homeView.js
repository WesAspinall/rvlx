define([
  'backbone',
  'handlebars',
  'hbs!app/views/templates/precomp'
], function(Backbone, Handlebars, Template){

    var HomeView = Backbone.View.extend({
        
        initialize: function(){

          this.render();
        },

        render: function() {

          document.body.innerHTML = Template({adjective: "favorite"});

        }
    })

    return HomeView;
});