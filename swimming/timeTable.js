class Event {
    constructor(time, index) {
        this.time = time;
        this.index = index;
    }
}

const MAX_SIZE = 5000;

class TimeTable {
    constructor() {
        /**@type {Event[]} */
        this.events = [];
        this.head = 0;
    }

    #dichotomy(time, range = null) {
        if (!range) range = [0, this.events.length - 1];

        const M = Math.round(this.events.length / 2);

    }

    #findInsertionIndex(time) {
        for (let index = this.events.length - 1; index >= 0; index--) {
            if (time > this.events[index].time) return index + 1;
        }

        return this.events.length;
    }

    #removePastEvents() {
        this.events = this.events.slice(this.head);
        this.head = 0;
    }

    add(time, index) {
        const insertionIndex = this.#findInsertionIndex(time);
        this.events.splice(insertionIndex, 0, new Event(time, index));

        if (this.events.length > MAX_SIZE) {
            this.#removePastEvents();
        }
    }

    getEvents(time) {
        if (this.events.length == 0) return null;
        let event = this.events[this.head];
        if (time < event.time) return null;
        const res = [];
        while (event && event.time <= time) {
            res.push(event);
            this.head++;
            event = this.events[this.head];
        }
        return res;
    }

}

export { TimeTable };