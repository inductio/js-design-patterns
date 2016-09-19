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
    constructor(props) {
        super();
        this.props = props;
        console.log('Decorator is ready');
    }

    Method() {
        this.props.Method();
    }
}