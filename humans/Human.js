define(['joga', 'text!Human.html'], function (joga, html) {

    function Human(name) {
        this.name = joga.stringProperty(name || "");
        this.isHappy = joga.booleanProperty(true);
        this.element = joga.elementProperty(html);
        this.genders = Human.genders;
        this.gender = joga.stringProperty(Human.genders()[0]);
        this.friends = joga.arrayProperty([]);
        this.bestFriends = joga.arrayProperty([]);
    }

    Human.genders = joga.arrayProperty(['Male', 'Female', 'Other']);
    
    Human.prototype.die = function () {
        this.element("<div>a dead human</div>");
    };
    
    Human.prototype.toString = function () {
        return "A human named " + this.name();
    };

    window.Human = Human;

    return Human;
});
