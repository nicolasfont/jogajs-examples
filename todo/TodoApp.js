define(['joga', 'text!TodoApp.html', 'Controls', 'TodoList'], function (joga, html, Controls, TodoList) {
    
    function TodoApp() {
        this.todoList = joga.objectProperty(new TodoList());
        this.controls = joga.objectProperty(new Controls({
            todoList: this.todoList()
        }));
        this.element = joga.elementProperty(html);
    }
    
    return TodoApp;
});
