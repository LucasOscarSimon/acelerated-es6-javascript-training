import Person from './test';

class Luk extends Person{
    constructor(age){
        super('Luk')
        this.age = age
    }

    greet(){
        console.log('Hello');
    }

    greetTwice(){
        this.greet();
        super.greet();
    }
}

let luk = new Luk(25);

console.log(luk.greetTwice());