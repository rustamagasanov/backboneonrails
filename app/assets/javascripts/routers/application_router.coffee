myapp.routers.ApplicationRouter = Backbone.Router.extend ->

  routes: {
    ''           : 'showMainView',
    'boards/:id' : 'showBoard'
  },

  showMainView: ->
    self = this
    console.log('in ApplicationRouter, showMainView action')
    board = new myapp.models.Board
    board.fetch(
      success: (model, response) ->
        console.log('successfully fetched boards')
        view = new myapp.views.MainIndex({ model: model })
        self.showView(view)
      error: (model, xhr, options) ->
        console.log('failed to fetch a model')
    )

  showBoard: (id) ->
    self = this
    console.log('in ApplicationRouter, showBoard action for board with id:' + id)
    board = new myapp.models.Board({ id: id })
    board.fetch(
      success: (model, response) ->
        console.log('successfully fetched board with id:' + id)
        view = new myapp.views.MainIndex({model: model})
        self.showView(view)
      error: (model, xhr, options) ->
        console.log('failed to fetch a model')
    )

  showView: (view) ->
    myapp.application.contentRegion.show(view)
