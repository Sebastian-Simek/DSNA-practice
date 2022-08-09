class Stack {
    #list = [];

    constructor(newList) {
        if (newList) this.#list = newList;
    }

    push(newList) {
        this.#list.push(newList);
    }

    peek(newList) {
        this.#list.peek(newList)
    }

    get count() {
        return this.#list.length;
    }

    set count(count) {
        return (this.#list.length = count);
    }

}

const ourList = new Stack([1, 2, 3]);
console.log(ourList);
ourList.push(4);

class Queue {}

module.exports = { Stack, Queue };
