# JS design patterns [Observer, Decorator]

## Observer

### How to use (demo)

Import or require Observer and Subject classes and run this demo code:

```
    function ObserverInit() {
        var observer1 = new Observer();
        var observer2 = new Observer();
        var subject = new Subject();
        subject.Attach(observer1);
        subject.Attach(observer2);
        subject.SetState('state 1');
    }
    
    ObserverInit();
```

## Decorator

### How to use (demo)

Import or require Observer and Subject classes and run this demo code:

```
    function decoratorInit() {
        const component = new Component();
        console.log(component.method());
    
        const decoratorA = new DecoratorA({}, component);
        console.log(decoratorA.method());
    
        const decoratorB = new DecoratorB({}, component);
        console.log(decoratorB.method());
    }
    
    decoratorInit();
```