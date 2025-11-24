class Animal {
    constructor(public name:string ){}
}

class Dog extends Animal{
    constructor( name: string , public breed: string) {
        super(name)
    }
}


const familyDog = new Dog("Gau", "nopee")
console.log(familyDog)