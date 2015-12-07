todoList.controller('todoAppController', [function() {

  var self = this;

  self.todos = [
    {text: 'ciao', done: false},
    {text: 'Hello', done: false}
    ];

    self.getTotalTodos = function(){
      return self.todos.legth;
    };

    self.addTodo = function() {
      self.todos.push({text: self.formTodoText, done: false});
      self.formTodoText = '';
    };

  }]);
