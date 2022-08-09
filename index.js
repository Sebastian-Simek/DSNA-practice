class Stack {
    #list = [];

    constructor(newList) {
        if (newList) this.#list = newList;
    }
    
    push(newAtt) {
        this.#list.push(newAtt);
    }
    
    peek(newAtt) {
        this.#list.peek(newAtt);
    }

    get count() {
        return this.#list.length;
    }

    set count(count) {
        return (this.#list.length = count);
    }

}

const ourList = new Stack([1, 2, 3]);
ourList.push(1);
class Queue {}

module.exports = { Stack, Queue };
