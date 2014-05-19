(function ($) {
  myapp.views.MainIndex = Backbone.View.extend({
    template: '#boards-index-template',

    initialize: function() {
      console.log('in MainIndex view initializer');
    },

    render: function() {
      console.log('in MainIndex view render action');
    },

    onShow: function() {
      console.log('in MainIndex view onShow action');
    }
  });
})(jQuery);
