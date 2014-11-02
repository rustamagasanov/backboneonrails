class myapp.models.Board extends Backbone.Model
  urlRoot: '/api/boards',

  initialize: () ->
    console.log('in Board model')
