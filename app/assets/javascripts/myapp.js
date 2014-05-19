(function() {
  window.myapp = {
    models: {},
    collections: {},
    views: {},
    routers: {}
  };

  $(document).ready(function() {
    new myapp.routers.ApplicationRouter();
    Backbone.history.start();
  });

}).call(this);
