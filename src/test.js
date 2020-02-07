class Helper {
    static logTwice(message){
        console.log(message);
        console.log(message);
    }
}


class Person {

    constructor(name){
        this.name = name;
    }

    greet() {
        console.log('Hello my name is ' + this.name + " and I'm " + this.age);
    }
}


export {Helper};
export default Person;