define([
  'backbone',
  'handlebars',
], function(Backbone, Handlebars){

    var HomeView = Backbone.View.extend({
        
        initialize: function(){

          this.render();
        },

        render: function() {
            console.log('hello from home render function');
        }
    });

    return HomeView;
});