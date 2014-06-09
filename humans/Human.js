define(['joga', 'text!Human.html'], function (joga, html) {

    function Human(name) {
        this.name = joga.stringProperty(name || "");
        this.isHappy = joga.booleanProperty(true);
        this.element = joga.elementProperty(html);
        this.genders = joga.arrayProperty(['Male', 'Female', 'Other']);
        this.gender = joga.stringProperty();
    }
    
    Human.prototype.die = function () {
        this.element("<div>a dead human</div>");
    };

    return Human;
});
