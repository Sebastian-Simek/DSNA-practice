class Stack {
    list = [1, 2, 3];

    constructor(newList) {
     this.list = newList;
    }
    
    push(newAtt) {
        console.log(newAtt);
        newList.push(newAtt);
    }
    
    // peek(newAtt) {
    //     this.#list.peek(newAtt);
    // }

    // get count() {
    //     return this.#list.length;
    // }

    // set count(count) {
    //     return (this.#list.length = count);
    // }

}

// const ourList = new Stack([1, 2, 3]);

class Queue {}

module.exports = { Stack, Queue };
