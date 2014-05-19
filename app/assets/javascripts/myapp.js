(function() {
  window.myapp = {
    models: {},
    collections: {},
    views: {},
    routers: {}
  },

  $(document).ready(function() {
    Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
      return Handlebars.compile(rawTemplate);
    };

    myapp.application = new Backbone.Marionette.Application();

    myapp.application.addRegions({
      contentRegion: '.content'
    });

    new myapp.routers.ApplicationRouter();
    Backbone.history.start();
  });

}).call(this);
