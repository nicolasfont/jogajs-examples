define(['joga', 'text!Human.html'], function (joga, html) {

    function Human() {
        this.name = joga.stringProperty("");
        this.isHappy = joga.booleanProperty(true);
        this.element = joga.elementProperty(html);
    }

    return Human;
});
