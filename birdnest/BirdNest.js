define(['joga', 'text!BirdNest.html', 'BirdView', 'Bird'], function (joga, html, BirdView, Bird) {
    
    function BirdNest() {
        this.title = joga.stringProperty('BirdNest');
        this.views = joga.arrayProperty([]);
        this.element = joga.elementProperty(html);
    }

    BirdNest.prototype.hatch = function (bird) {
        this.views.push(new BirdView(bird));
    };
    
    return BirdNest;
});
