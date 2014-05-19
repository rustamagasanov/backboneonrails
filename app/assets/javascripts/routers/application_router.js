(function ($) {
  myapp.routers.ApplicationRouter = Backbone.Router.extend({

    routes: {
      '': 'showMainView'
    },

    showMainView: function() {
      console.log('in Application router');
      var board = new myapp.models.Board();
      board.fetch({
        success: function(model, response) {
          console.log('successfully fetched boards');
          new myapp.views.MainIndex({model: model});
        },
        error: function(model, xhr, options) {
          console.log('failed to fetch a model');
        }
      });
    }

  })
})(jQuery);
