class myapp.views.MainIndex extends Backbone.Marionette.ItemView
  template: '#boards-index-template',

  initialize: ->
    console.log('in MainIndex view initializer')
    console.log('model accepted:')
    console.log(this.model)

  render: ->
    console.log('in MainIndex view render action')
    Marionette.Renderer.render(this.template, this.data)

  onShow: ->
    console.log('in MainIndex view onShow action')
