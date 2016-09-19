

class AbstractComponent {
    constructor(props) {
        this.props = props;
    }

    method() {}
}

class AbstractDecorator extends AbstractComponent {
    constructor(props, component) {
        super(props);
        this.component = component;
    }

    method() {
        return this.component.method();
    }
}

class Component extends AbstractComponent {
    constructor(props) {
        super(props);
        console.log('Component is ready');
    }

    method() {
        return 'from Component Method';
    }
}

class DecoratorA extends AbstractDecorator {
    constructor(props, component) {
        super(props, component);
        console.log('DecoratorA is ready');
    }

    method() {
        return super.method() + ' and from DecoratorA';
    }
}

class DecoratorB extends AbstractDecorator {
    constructor(props, component) {
        super(props, component);
        console.log('DecoratorB is ready');
    }

    method() {
        return super.method() + ' and from DecoratorB';
    }
}