//create a class-subclass structure and implement it using javascript classes.
//be sure each have at least one method on them.
//Export the parent class in one file and import the child class in another
class mySubClass {
    constructor(test) {
        this.test = test

    }
    testFunction() {
        return this.test
    }
}

class myClass extends mySubClass {
    constructor(test){
        super(test);
    }
}

let testTest = new myClass("testtest");
console.log(testTest.testFunction());