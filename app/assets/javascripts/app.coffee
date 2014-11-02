Backbone.Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
  Handlebars.compile rawTemplate

myapp.application = new Backbone.Marionette.Application()

myapp.application.addRegions
  contentRegion: '.content'

myapp.application.on "initialize:after", (options) ->
  Backbone.history.start() if Backbone.history

# new myapp.routers = new ApplicationRouter()
