class Stack {
    #list;

    constructor(list) {
        this.#list = list || [];
    }

    push(item) {
        this.#list.push(item)
    }


    peak() {
       return this.#list[this.#list.length-1];
    }
}

class Queue {
    #things;

    constructor(things) {
        this.#things = things || [];
    }
    
    enqueue(item) {
        this.#things.push(item);

    }

    get count() {
        return this.#things.length;
    }

    get next() {
        return this.#things[0];
    }
}


module.exports = { Stack, Queue };
