/*
                                                            inheritance, polymorphism, encapsulation
making base class:
    create instrument class
        needs properties in constructor class for loudness, family, play verb
        needs method for playing the instrument that logs to console, the family, loudness, and its verb
        {{family}} {{verb}} at {{loudness}}

making a concrete class:
    make classes for woodwind, for percussion, for string
        should extend the base, instrument class
        |strings:       piano, violin, guitar, banjo| 
        |woodwinds:     clarinet, flute, recorder|
        |percussion:    marimba, snare drum, chimes, tambourine|
    
    each of these classes should have custom 'loudness' to pass to super constructor
        verb and family should be specified inside child constructor

test your code
    make one instance of each of your child classes, put them into array
    loop through array - call play method of each of them. 
    You should see the full message in console.
*/
//inheritance polymorphism encapsulation

// class Instrument {
//     constructor(family, verb, loudness) {
//         this.family = family;
//         this.verb = verb;
//         this.loudness = loudness;
//     }

//     play() {
//         console.log("The " + this.family + " instrument" + " is played at" + this.loudness + " decibles!");
//     }
// } 

// class Woodwind extends Instrument {
//     constructor(family, verb, loudness) {
//         super(family, woodwind);
//         super(verb, play);
//         super(loudness, 3);
//     }
// }

// class Percussion extends Instrument {
//     constructor(family) {
//         super(family, 1);
//     }
// }



//working ex 
// why is nothing showing up on the console.. ok fixed

//inheritance
class Note {
    constructor(pitch, duration) {
        this.pitch = pitch;
        this.duration = duration;
    }
}

class FullNote extends Note {
    constructor(pitch) {
        super(pitch, 1);
    }
}
class HalfNote extends Note {
    constructor(pitch) {
        super(pitch, 0.5);
    }
}

//sorry Kinda confused still.. will try to study concept better
let notes =[];
notes [0] = new Note();
notes [1] = new Note();
notes.forEach((note) => {
    note.read();
});


//polymorphism
/*
// class Book {
//     constructor(pages) {
//         this.pages = pages;
//     }

//     read() {
//         console.log("You just read " + this.pages + " pages!");
//     }
// }

// class Novel extends Book {
//     constructor() {
//         super(300);
//     }
// }

// class Comic extends Book {
//     constructor() {
//         super(100);
//     }
// }

// let books = [];
// books [0] = new Comic();
// books [1] = new Novel();
// books.forEach((book) => {
//     book.read();
// });
*/


//encapsulation
/*
class Engine {
    constructor() {
        this.oil = 10;
    }

    setOil(newOilAmount) {
        if(newOilAmount >= 0) {
            this.oil = newOilAmount
            console.log("your oil is " + this.oil + " oil!")
        } else {
            console.error("Cannot set negative oil");
        }
    }

    getOil() {
        return this.oil();
    }
}
*/
