// A instancia (subscriber) mantém uma coleção de objetos (observers) e otifica todos eles quando ocorrem mudanças no estado.

class Observable {
    constructor() {
        this.observables = [];
    }

    subscribe (fn) {
        this.observables.push(fn);
    }

    notify (data) {
        this.observables.forEach(fn => fn(data));
    }
}

const o = new Observable();

const logData1 = data => console.log(`subscribe1: ${data}`);

o.subscribe(logData1);
o.notify('notified 1');