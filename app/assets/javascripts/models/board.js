(function ($) {
  myapp.models.Board = Backbone.AssociatedModel.extend({
    urlRoot: '/api/boards',

    initialize: function() {
      console.log('in Board model');
    }
  });
})(jQuery);
