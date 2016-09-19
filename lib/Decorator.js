class RawComponent {
    constructor() {
    }

    Method() {
    }
}

class Component extends RawComponent {
    constructor() {
        super();
        console.log('Component is ready');
    }

    Method() {
        console.log('from Component Method');
    }
}

class ComponentDecorator extends Component {
    constructor(props, decor) {
        super(props);
        this.props = props;
        this.decor = decor ? decor : ' simple decor';
        console.log('Decorator is ready');
    }

    DecoratorMethod() {
        console.log(super.Method() + this.decor);
    }
}

function DecoratorInit() {
    const component = new ComponentDecorator();
    ComponentDecorator.DecoratorMethod();
}

DecoratorInit();