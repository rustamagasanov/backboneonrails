Backbone.Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
  Handlebars.compile rawTemplate

myapp.application = new Backbone.Marionette.Application()

myapp.application.addRegions
  contentRegion: '.content'

# new myapp.routers = new ApplicationRouter()
