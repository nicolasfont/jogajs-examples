define(['text!Todo.view.html', 'text!Todo.edit.html'], function (viewHtml, editHtml) {
    
    function Todo(description) {
        this.description = joga.stringProperty(description);
        this.isEditing = joga.booleanProperty(false);
        this.deleted = joga.booleanProperty(false);
        
        this.viewElement = joga.elementProperty(viewHtml);
        this.editElement = joga.elementProperty(editHtml);
        
        this.element = joga.computedProperty(function() {
            return this.isEditing() ? this.editElement() : this.viewElement();
        });
    }
    
    Todo.prototype.edit = function () {
        this.isEditing.toggle();
    };
    
    Todo.prototype.delete = function () {
        this.deleted(true);
    };

    return Todo;
});
