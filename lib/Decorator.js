/*
 Creating abstract component class;
 */
class AbstractComponent {
    constructor(props) {
        this.props = props;
    }

    method() {}
}

/*
 Creating abstract decorator class;
 */
class AbstractDecorator extends AbstractComponent {
    constructor(props, component) {
        super(props);
        this.component = component;
    }

    method() {
        return this.component.method();
    }
}

/*
 Creating concrete extended component class;
 */
class Component extends AbstractComponent {
    constructor(props) {
        super(props);
        console.log('Component is ready');
    }

    method() {
        return 'from Component Method';
    }
}

/*
 Creating concrete dummy DecoratorA extended class;
 */
class DecoratorA extends AbstractDecorator {
    constructor(props, component) {
        super(props, component);
        console.log('DecoratorA is ready');
    }

    method() {
        return super.method() + ' and from DecoratorA';
    }
}

/*
 Creating concrete dummy DecoratorB extended class;
 */
class DecoratorB extends AbstractDecorator {
    constructor(props, component) {
        super(props, component);
        console.log('DecoratorB is ready');
    }

    method() {
        return super.method() + ' and from DecoratorB';
    }
}