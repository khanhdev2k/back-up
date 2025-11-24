abstract class Animal {
    constructor( protected name: string) {}

    abstract makesound():  void
}

class Dog extends Animal {
    constructor( name: string, public bite: boolean) {
        super(name)
    }

    makesound(): boolean {
        return this.bite = false
        // console.log(
        //     'Woof, Wooof !!!!'
        // )
    }
} 


const myChildhoodDog = new Dog('Gau', true)

let bite: boolean = myChildhoodDog.makesound()
console.log(bite)