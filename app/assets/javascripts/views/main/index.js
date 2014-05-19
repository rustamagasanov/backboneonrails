(function ($) {
  myapp.views.MainIndex = Backbone.View.extend({
    template: '#boards-index-template',

    initialize: function() {
      console.log('in MainIndex view initializer');
    },

    render: function() {
      console.log('in MainIndex view render action');
    },

    show: function() {
      console.log('in MainIndex view show action');
    }
  });
})(jQuery);
