Backbone.Marionette.TemplateCache::compileTemplate = (rawTemplate) ->
  Handlebars.compile rawTemplate

myapp.application = new Backbone.Marionette.Application()
new myapp.routers.Application()

myapp.application.addRegions
  contentRegion: '.content'

myapp.application.on "start", (options) ->
  Backbone.history.start() if Backbone.history

