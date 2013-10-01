Todos.Router.map(function () {
<<<<<<< HEAD
    this.resource('todos', { path: '/' }, function () {
        this.route('active');
        this.route('completed');
    });
=======
  this.resource('todos', { path: '/' });
>>>>>>> 8852f76b1407f9af4932c527f624d88d8874a81f
});

Todos.TodosRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('todo');
  }
});
