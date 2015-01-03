define(['joga', 'text!Clock.html'], function (joga, html) {
    
    function Clock() {
        this.time = joga.stringProperty(new Date().toString());
        this.interval = joga.objectProperty();
        this.element = joga.elementProperty(html);
        this.start();
    }
    
    Clock.prototype.update = function () {
        this.time(new Date().toString());
        return this;
    };

    Clock.prototype.start = function () {
        this.interval(setInterval(function () {
            this.update();
        }.bind(this), 100));

        return this;
    };

    Clock.prototype.stop = function () {
        clearInterval(this.interval());
        return this;
    };
    
    return Clock;
});