define(['joga'], function (joga) {

    function Thing() {
        
        this.details = joga.arrayProperty([]);
        
        this.element = joga.elementProperty(
            '<div class="Constructor">'+
                '<span>Hello</span>'+
                '<div data-children="this.details.pluck(\'element\')"/>'+
            '</div>');
        
        this.element = joga.elementProperty(
            '<div class="Constructor">'+
                '<span>Hello</span>'+
                '<div data-children="this.details()"/>'+
            '</div>');
        
        this.element = joga.elementProperty(
            '<div class="Constructor">'+
                '<span>Hello</span>'+
                '<div class="details">'+
                    '<details/>'+
                '</div>'+
            '</div>');
    }
    
    return Thing;
    
});