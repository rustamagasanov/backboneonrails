->
  Backbone.Marionette.Renderer.render = (template, data) ->
    if template == false
      return
    if !template
      error = new Error("Cannot render the template since it's false, null or undefined.")
      error.name = "TemplateNotFoundError"
      throw error

    if typeof template == "function"
      templateFunc = template
    else
      templateFunc = Marionette.TemplateCache.get(template)

    templateFunc(data)
