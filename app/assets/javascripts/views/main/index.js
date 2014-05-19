(function ($) {
  myapp.views.MainIndex = Marionette.ItemView.extend({
    template: '#boards-index-template',

    initialize: function() {
      console.log('in MainIndex view initializer');
      console.log('model accepted:');
      console.log(this.model);
    },

    render: function() {
      console.log('in MainIndex view render action');
    },

    onShow: function() {
      console.log('in MainIndex view onShow action');
    }
  });
})(jQuery);
