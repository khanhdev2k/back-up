"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bite;
    constructor(name, bite) {
        super(name);
        this.bite = bite;
    }
    makesound() {
        return this.bite = false;
        // console.log(
        //     'Woof, Wooof !!!!'
        // )
    }
}
const myChildhoodDog = new Dog('Gau', true);
let bite = myChildhoodDog.makesound();
console.log(bite);
//# sourceMappingURL=abstract.js.map