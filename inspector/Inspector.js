define(['joga', 'text!Inspector.html'], function (joga, html) {
    
    function Inspector() {
        this.inspectee = joga.objectProperty(window);
        this.element = joga.elementProperty(html);
    }
    
    Inspector.prototype.properties = function () {
        var properties = [];
        
        for (var prop in this.inspectee()) {
            properties.push(document.createTextNode(prop));
        }
        
        return properties;
    };
    
    return Inspector;
});