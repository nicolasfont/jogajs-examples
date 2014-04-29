define(['text!Todo.view.html', 'text!Todo.edit.html'], function (viewHtml, editHtml) {
    
    function Todo(description) {
        this.description = joga.string(description);
        this.isEditing = joga.boolean(false);
        this.deleted = joga.boolean(false);
        
        this.viewElement = joga.element(viewHtml);
        this.editElement = joga.element(editHtml);
        
        this.element = joga.computed(function() {
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