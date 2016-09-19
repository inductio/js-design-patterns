class RawComponent {
    constructor() {
    }
}

class Component extends RawComponent {
    constructor() {
        super();
        console.log('Component is ready')
    }
}

class RawComponentCreator {
    constructor() {
    }

    CreatorMethod() {
    }

    Method() {
        console.log("Method()");
        this.prop = this.CreatorMethod();
        console.log(this.prop instanceof RawComponentCreator);
    }
}

class ComponentCreator extends RawComponentCreator {

    constructor() {
        super();
        console.log('ComponentCreator is ready');
    }

    CreatorMethod() {
        return new Component();
    }
}

function FactoryInit() {
    let factory = new ComponentCreator();
    factory.Method();
}