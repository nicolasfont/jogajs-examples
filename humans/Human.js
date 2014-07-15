define(['joga', 'text!Human.html', 'text!Human.dead.html'], function (joga, html, deadHtml) {

    function Human(name) {
        this.name = joga.stringProperty(name || "");
        this.isHappy = joga.booleanProperty(true);
        this.element = joga.elementProperty(html);
        this.gender = joga.stringProperty(Human.genders()[0]);
        this.friends = joga.arrayProperty([]);
        this.bestFriends = joga.arrayProperty([]);
    }

    Human.genders = joga.arrayProperty(['Male', 'Female', 'Other']);
    
    Human.prototype.die = function () {
        this.element(deadHtml);
    };
    
    Human.prototype.resucitate = function () {
        this.element(html);
    };
    
    Human.prototype.toString = function () {
        return "A human named " + this.name();
    };
    
    Human.prototype.toJson = function () {
        return {
            name: this.name(),
            isHappy: this.isHappy(),
            gender: this.gender()
        };
    };

    window.Human = Human;

    return Human;
});
