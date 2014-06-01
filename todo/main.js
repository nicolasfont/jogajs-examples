define(['TodoApp'], function (TodoApp) {
    
    var app = new TodoApp();
    
    window.app = app;
    
    document.body.appendChild(app.element());
});