class Animal {
    static PI = 3.14;
    constructor( public animalName: string) {}

            move() {
            console.log(`${this.animalName} is moving`) 
        }

        print() {
            console.log(Animal.PI)
        }
}

class Dog extends Animal {
    bark() { 
        console.log('Woof')
    }

    dogSize() {
        return Animal.PI * 222
    }
}

const girlFDog = new Dog('Mun')
girlFDog.bark()
girlFDog.move()
console.log(Animal.PI)
console.log(girlFDog.dogSize())