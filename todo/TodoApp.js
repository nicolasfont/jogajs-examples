define(['text!TodoApp.html', 'Controls', 'TodoList', 'joga'], function (html, Controls, TodoList, joga) {
    
    function TodoApp() {
        this.todoList = joga.object(new TodoList());
        this.controls = joga.object(new Controls({
            todoList: this.todoList()
        }));
        this.element = joga.element(html);
    }
    
    return TodoApp;
});