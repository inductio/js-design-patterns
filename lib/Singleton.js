let _singleton;

class SingletonClass {
    constructor (props) {
        if(!_singleton) {
            this.props = props;
            _singleton = this;
        }
        else {
            return _singleton;
        }
        console.log("Singleton class is ready");
    }

    SingletonMethod() {
        console.log('It is Singleton Method');
    }

    GetProps () {
        return this.props;
    }
}

function SingletonInit() {
    const FirstClass = new SingletonClass("prop1");
    const SecondClass = new SingletonClass("prop2");

    //checking
    console.log(FirstClass.GetProps());
    console.log(SecondClass.GetProps());
    console.log(FirstClass instanceof SingletonClass);
    console.log(SecondClass instanceof SingletonClass);
    console.log(FirstClass === SecondClass);
}

SingletonInit();