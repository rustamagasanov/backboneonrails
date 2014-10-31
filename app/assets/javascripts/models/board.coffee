->
  myapp.models.Board = Backbone.AssociatedModel.extend({
    urlRoot: '/api/boards',

    initialize: () ->
      console.log('in Board model')
  })
