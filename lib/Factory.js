class AbstractComponent {
    constructor() {
    }
}

class Component extends AbstractComponent {
    constructor() {
        super();
        console.log('Component is ready')
    }
}

class AbstractComponentCreator {
    constructor() {
    }

    CreatorMethod() {
    }

    Method() {
        console.log("Method()");
        this.prop = this.CreatorMethod();
        console.log(this.prop instanceof AbstractComponentCreator);
    }
}

class ComponentCreator extends AbstractComponentCreator {

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

FactoryInit();