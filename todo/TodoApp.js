define(['text!TodoApp.html', 'Controls', 'TodoList', 'joga'], function (html, Controls, TodoList, joga) {
    
    function TodoApp() {
        this.todoList = joga.objectProperty(new TodoList());
        this.controls = joga.objectProperty(new Controls({
            todoList: this.todoList()
        }));
        this.element = joga.elementProperty(html);
    }
    
    return TodoApp;
});
