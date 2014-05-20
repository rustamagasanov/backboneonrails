(function ($) {
  myapp.routers.ApplicationRouter = Backbone.Router.extend({

    routes: {
      ''           : 'showMainView',
      'boards/:id' : 'showBoard'
    },

    showMainView: function() {
      var self = this;
      console.log('in ApplicationRouter, showMainView action');
      var board = new myapp.models.Board();
      board.fetch({
        success: function(model, response) {
          console.log('successfully fetched boards');
          var view = new myapp.views.MainIndex({model: model});
          self.showView(view);
        },
        error: function(model, xhr, options) {
          console.log('failed to fetch a model');
        }
      });
    },

    showBoard: function(id) {
      var self = this;
      console.log('in ApplicationRouter, showBoard action for board with id:' + id)
      var board = new myapp.models.Board({id: id});
      board.fetch({
        success: function(model, response) {
          console.log('successfully fetched board with id:' + id);
          var view = new myapp.views.MainIndex({model: model});
          self.showView(view);
        },
        error: function(model, xhr, options) {
          console.log('failed to fetch a model');
        }
      });
    },

    showView: function(view) {
      myapp.application.contentRegion.show(view);
    }

  })
})(jQuery);
