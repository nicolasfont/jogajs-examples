define(['joga', 'text!HumansApp.html', 'Human'], function (joga, html, Human) {

    function HumansApp() {
        this.element = joga.elementProperty(html);
    }

    return HumansApp;
});
