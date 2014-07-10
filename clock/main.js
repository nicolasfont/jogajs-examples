define(['Clock'], function (Clock) {
    
    window.clock = new Clock();

    document.body.appendChild(clock.element());
});