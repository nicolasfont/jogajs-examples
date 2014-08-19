define(['joga'], function (joga) {
    
    function Bird(name) {
        this.name = joga.stringProperty(name);
    }
    
    return Bird;
});
