/*
 Creating abstract subject class with attach, detach and notify methods;
*/
class AbstractSubject {
    constructor() {
    }

    Attach(Observer) {
        this.observers.push(Observer);
        console.log('Observer is attached');
    }

    Detach(Observer) {
        for (let i in this.observers) {
            if (this.observers[i] === Observer) {
                this.observers.splice(i, 1);
            }
        }
    }

    Notify() {
        console.log('Subject Notify');
        for (let i in this.observers) {
            this.observers[i].Update(this);
        }
    }
}

/*
 Creating concrete extended subject class ith get and set states methods;
 */
class Subject extends AbstractSubject {
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

/*
 Creating abstract Observer class;
 */
class AbstractObserver {
    constructor() {
    }

    Update (){
    }
}

/*
 Creating concrete extended Observer class with Update method;
 */
class Observer extends AbstractObserver {
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