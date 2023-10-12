class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    const listeners = this.events.get(event);
    listeners.push(cb);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(cb);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) {
      return [];
    }

    const listeners = this.events.get(event);
    const results = [];

    for (const listener of listeners) {
      results.push(listener(...args));
    }

    return results;
  }
}

const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], no callback are subscribed yet
emitter.subscribe("firstEvent", function cb1() {
  return 5;
});
emitter.subscribe("firstEvent", function cb2() {
  return 6;
});
emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
