define(['joga', 'text!Controls.html'], function (joga, html) {
    
    function Controls(options) {
        this.todoList = joga.objectProperty(options.todoList);
        this.description = joga.stringProperty("");
        this.element = joga.elementProperty(html);
    }
    
    Controls.prototype.addTodo = function () {
        if (this.description.isNotBlank()) {
            this.todoList().add(this.description());
            this.description("");
        }
    };
    
    Controls.prototype.clear = function () {
        this.todoList().clear();
    };
    
    Controls.prototype.addTestData = function () {
        var i;
        for (i = 0; i < 10; i++) {
            this.todoList().add(i); 
        }
    };
    
    return Controls;
});
