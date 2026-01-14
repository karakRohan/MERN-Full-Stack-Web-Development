//3) OOP //
// const stu1 = {
//     name : "Rohan",
//     age : "21",
//     marks : 78,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name : "ayan",
//     age : "21",
//     marks : 95,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name : "Srijan",
//     age : "25",
//     marks : 98,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// 4) Object Prototype //
// let arr = [1, 2, 3];
// let arr2 = [1, 2, 3];
// arr.sayHello = () => {
//     console.log("Hello!, I am arr");
// };

// arr2.sayHello = () => {
//     console.log("hello, i am arr");
// };



// 5) Factory Function //
// function PersonMaker(name, age) 
// {
    // const person = {
        // name : name,
        // age : age,
        // talk() {
            // console.log(`Hi, My Name is ${this.name}`);
        // }
    // }
    // return person;
// }

// let p1 = PersonMaker("Rohan",22); // copy
// let p2 = PersonMaker("Ayan",22); // copy



// 6) New Operators //
// Constructors - doesn't anything & start with capital
// function Person(name, age) 
// {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function () 
// {
//     console.log(`Hi, My Name is ${this.name}`);
// };

// let p1 = new Person("Rohan", 22);
// let p2 = new Person("Ayan",22);



// 7) Classes //
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, My Name is ${this.name}`);
//     }
// }

// let p1 = new Person("Rohan", 22);
// let p2 = new Person("Ayan",22);



// 8) Inheritance //
// class Person {
//     constructor(name, age) {
//         console.log("Person Class constructor")
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("Student Class constructor")
//         super(name, age); // Parent Class Constructor is being called
//         this.marks = marks;
//     }
// }

// // let stu1 = new Student("Rohan", 22, 78);

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age); // Parent Class Constructor is being called
//         this.subject = subject;
//     }
// }

// Method - 2
class Mammal { // base class / Parent
    constructor(name) {
        this.name = name;
        this.type = "Warm-blooded";
    }

    eat() {
        console.log("I am Eating");
    }
}

class Dog extends Mammal { // Child
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("woof..");
    }

    eat() {
        console.log("Dog is eating");
    }
}

class Cat extends Mammal { // Child
    constructor(name) {
        super(name);
    }

    meow() {
        console.log("meow..");
    }
}