define(['joga', 'text!BirdView.html'], function (joga, html) {
    
    function BirdView(bird) {
        this.bird = joga.objectProperty(bird);
        this.element = joga.elementProperty(html);
    }
    
    return BirdView;
});
