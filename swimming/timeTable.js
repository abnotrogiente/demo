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
        for (let index = this.events.length - 1; index >= this.head; index--) {
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
        // console.log("");
        // console.log("add time event : " + time);
        // console.log("headd : " + this.head);
        // console.log("insertion index : " + insertionIndex);
        // console.log("");
        this.events.splice(insertionIndex, 0, new Event(time, index));

        if (this.events.length > MAX_SIZE) {
            this.#removePastEvents();
        }
    }

    getEvents(time) {
        if (this.events.length == 0 || this.head >= this.events.length) return null;
        console.log("head : " + this.head);
        let event = this.events[this.head];
        if (time < event.time) return null;
        //this.head++;
        const res = [];
        // console.log("event time : " + event.time);
        // console.log("time : " + time);
        while (event && event.time <= time) {

            res.push(event);
            this.head++;
            event = this.events[this.head];
        }
        // console.log("res size : " + res.length);
        //this.head++;
        return res;
    }

}

export { TimeTable };