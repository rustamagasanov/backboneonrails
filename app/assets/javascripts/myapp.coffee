window.myapp = {
  models: {},
  collections: {},
  views: {},
  routers: {}
}

->
  Backbone.Marionette.TemplateCache.prototype.compileTemplate = (rawTemplate) ->
    Handlebars.compile(rawTemplate)

  myapp.application = new Backbone.Marionette.Application()

  myapp.application.addRegions({
    contentRegion: '.content'
  })

  myapp.application.start()

  new myapp.routers.ApplicationRouter()
  Backbone.history.start()
