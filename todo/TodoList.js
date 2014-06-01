define(['text!TodoList.html', 'Todo'], function (html, Todo) {

    function TodoList() {
        this.todos = joga.arrayProperty([]);
        this.element = joga.elementProperty(html);
    }
    
    TodoList.prototype.add = function (description) {
        var todo = new Todo(description);
        
        this.todos.push(todo);
        
        todo.deleted.subscribe(function () {
            this.delete(todo);
        }.bind(this));
    };
    
    TodoList.prototype.delete = function (todo) {
        this.todos.remove(todo);
    };
    
    TodoList.prototype.clear = function () {
        this.todos.clear();
    };
    
    return TodoList;
});
