define(['joga', 'text!Human.html'], function (joga, html) {

    function Human(name) {
        this.name = joga.stringProperty(name || "");
        this.isHappy = joga.booleanProperty(true);
        this.element = joga.elementProperty(html);
        this.genders = Human.genders;
        this.gender = joga.stringProperty(Human.genders()[0]);
    }

    Human.genders = joga.arrayProperty(['Male', 'Female', 'Other']);
    
    Human.prototype.die = function () {
        this.element("<div>a dead human</div>");
    };

    window.Human = Human;

    return Human;
});
