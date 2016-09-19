class RawSubject {
    constructor() {
    }

    Attach(Observer) {
        this.observers.push(Observer);
        console.log('Observer is attached');
    }

    Dettach(Observer) {
        for(var i in this.observers)
            if(this.observers[i] === Observer)
                this.observers.splice(i, 1)
    }

    Notify() {
        console.log('Subject Notify');
        for(var i in this.observers){
            this.observers[i].Update(this);
        }
    }
}

class Subject extends RawSubject {
    constructor() {
        super();
        this.subjectState = null;
        this.observers = [];
        console.log('Subject is ready');
    }

    GetState() {
        return this.subjectState;
    }

    SetState(state) {
        this.subjectState = state;
        this.Notify();
    }
}

class RawObserver {
    constructor() {
    }

    Update (){
    }
}

class Observer extends RawObserver {
    constructor() {
        super();
        this.observerState = '';
        console.log('Observer is ready');
    }

    Update (Subject){
        this.observerState = Subject.GetState();
        console.log('Observer new state: ' + this.observerState);
    }
}

function ObserverInit() {
    var observer1 = new Observer();
    var observer2 = new Observer();
    var subject = new Subject();
    subject.Attach(observer1);
    subject.Attach(observer2);
    subject.SetState('state 1');
}

ObserverInit();