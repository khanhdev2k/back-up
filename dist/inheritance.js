"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    animalName;
    static PI = 3.14;
    constructor(animalName) {
        this.animalName = animalName;
    }
    move() {
        console.log(`${this.animalName} is moving`);
    }
    print() {
        console.log(Animal.PI);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof');
    }
    dogSize() {
        return Animal.PI * 222;
    }
}
const girlFDog = new Dog('Mun');
girlFDog.bark();
girlFDog.move();
console.log(Animal.PI);
console.log(girlFDog.dogSize());
//# sourceMappingURL=inheritance.js.map