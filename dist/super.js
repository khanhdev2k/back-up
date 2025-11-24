"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
const familyDog = new Dog("Gau", "nopee");
console.log(familyDog);
//# sourceMappingURL=super.js.map