"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    speak() {
        console.log("xxxxx");
    }
}
class Dog extends Animal {
    speak() {
        console.log('woof');
    }
}
class Cat extends Animal {
    speak() {
        console.log('Mewwww !!!');
    }
}
class Fish extends Animal {
    speak() {
        const spread = 'vo veeee';
        console.log(spread);
    }
}
function makeNoise(animal) {
    animal.speak;
}
makeNoise(new Fish());
makeNoise(new Dog());
//# sourceMappingURL=polymorphism.js.map