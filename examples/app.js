//objects and classes @ 9 min
    //concrete object

// var myDog1 = {
//     name: "Kuzko",
//     height: 10,
//     color: "brown",
//     bark: function() {
//         console.log(this.name + " barks!");
//     }
// }

// myDog1.bark();


//make a class
// class Dog {
//     constructor(name,height,color) {
//         this.name = name;
//         this.height = height;
//         this.color = color;
//     }

//     bark() {
//         console.log(this.name + " woofs!");
//     }
// }


//make an instance of object
// var myDog2 = new Dog("Giselle",10,"yellow");
// var myDog3 = new Dog("Clifford",400,"red");


// console.log(myDog1);
// console.log(myDog2);
// myDog2.bark();

// console.log(myDog3);
// myDog3.bark();


//adding extends @ 20 min
class Animal {
    constructor(name,weight,color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
}

class Dog extends Animal {
    constructor(name,weight,color) {
        super(name,weight,color);
        this.kind = "dog";
    }

    bark() {
        console.log(this.name + " barks!");
    }
}

// let animalEx = new Animal("Ex", 10, "green");
let aDog = new Dog("Rex", 45, "black");
console.log(aDog);
aDog.bark();


//make a class (toys, music, cars, ppl, etc), properties methods, then make a subclass
//10-15min

class Aguero {
    constructor(name,age,nationality,position) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.position = position;
    }    
}
class City {
    constructor(name,city,color) {
        this.name = name;
        this.city = city;
        this.color = color;
    }
}



