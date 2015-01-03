define(['joga', 'HorizontalLayout'], function (joga, HorizontalLayout) {
    
    function Human(options) {
        
        this.name = joga.stringProperty(options.name);
        this.personality = joga.objectProperty(options.personality);
        this.body = joga.objectProperty(options.body);
        this.friends = joga.arrayProperty(options.friends);
        
        this.horizontalLayout = joga.objectProperty(new HorizontalLayout());
        
        this.element = joga.elementProperty(`
            <div class="Human">
                <span text="this.name()"/> or <span><name/></span>
                <personality/>
                <body/>
                <horizontalLayout>
                    <friends/>
                </horizontalLayout>
            </div>
        `);
    }
    
    Human.prototype.run = function () {
        this.body.run();
    };
    
    Human.prototype.walk = function () {
        this.body.walk();
    };
    
    Human.prototype.beHappy = function () {
        this.personality.actHappy();
        this.body.smile();
    };
    
    return Human;
    
});
