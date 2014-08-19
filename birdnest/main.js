define(['BirdNest', 'Bird'], function (BirdNest, Bird) {

    window.pio = new Bird('pio');
    window.cuku = new Bird('cuku');
    window.nene = new Bird('nene');
    
    window.nest = new BirdNest();

    document.body.appendChild(nest.element());

    nest.hatch(pio);

    nest.views.clear();
});