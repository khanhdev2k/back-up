class Animal {
    speak() {
        console.log("xxxxx")
    }
}

class Dog extends Animal{
    speak() {
        console.log('woof')
    }
}

class Cat extends Animal {
    speak() {
        console.log('Mewwww !!!')
    }
}

class Fish extends Animal {
    speak() {
        const spread: string = 'vo veeee'
        console.log(spread)
    }
}
function makeNoise(animal: Animal) {
    animal.speak
}

makeNoise(new Fish())
makeNoise(new Dog())


