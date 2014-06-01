define(['Inspector'], function (Inspector) {
    
    window.inspector = new Inspector();
    
    document.body.appendChild(inspector.element());
});