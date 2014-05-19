(function ($) {
  myapp.views.MainIndex = Backbone.Marionette.ItemView.extend({
    template: '#boards-index-template',

    initialize: function() {
      console.log('in MainIndex view initializer');
      console.log('model accepted:');
      console.log(this.model);
    },

    render: function() {
      console.log('in MainIndex view render action');
      Marionette.Renderer.render(this.template, this.data);
    },

    onShow: function() {
      console.log('in MainIndex view onShow action');
    }
  });
})(jQuery);
