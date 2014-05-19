(function() {
  window.myapp = {
    models: {},
    collections: {},
    views: {},
    routers: {}
  },

  $(document).ready(function() {
    myapp.application = new Backbone.Marionette.Application();

    myapp.application.addRegions({
      contentRegion: '.content'
    });

    new myapp.routers.ApplicationRouter();
    Backbone.history.start();
  });

}).call(this);
