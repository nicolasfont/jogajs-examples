define(['HumansApp'], function (HumansApp) {

    var app = new HumansApp();

    window.app = app;

    document.body.appendChild(app.element());
});
