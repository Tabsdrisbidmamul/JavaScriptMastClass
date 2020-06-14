/* ------------------------------------------
Lecture: Let and const
*/

// ES5
/*var name5 = "Jane Smith";
var age = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
// const is for constant variables
// let is like the old var

const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6);*/


// ES5 - function-scoped
// All variables declared in a function can be used anywhere within it, even those wrapped in code blocks
/*function driversLicense5(passedTest) {
    if(passedTest) {
        var firstName = "John";
        var yearOfBirth = 1990;
        
    }
    console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car.");
};

driversLicense5(true);*/

// ES6 - blocked-scoped
// All variables declared within a block of code can only be used in that scope and not anywhere in an outer scope (more akin to Java with its code block and scopes) - to work around it, you would declare the variable uninitalised in the outer scope, change the value in the inner scope and then use the variable in the outer scope

// We also cannot use before they are declared, they are hoisted (but it is called a temporal dead-zone) meaning that we cannot access them before they are declared - and only allowing functions to be hoisted with this new scheme 
/*function driversLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;
    
    if(passedTest) {
        firstName = "John";
      
    }
    console.log(firstName + ", born in " + yearOfBirth + " is now officially allowed to drive a car.");
};

driversLicense6(true);*/

// This will actually change the value of i which is outside of the for loop - end result is that i is 5
//var i = 23;
//
//for(var i=0; i<5; i++) {
//    console.log(i);
//}
//
//console.log(i);

// Values defined with let are no longer affected if they are declared in thier scope - more akin to OOP languages now
//let i = 23;
//
//for(let i=0; i<5; i++) {
//    console.log(i);
//}
//
//console.log(i);


/* ------------------------------------------
Lecture: Blocks and IIFEs
*/

// ES6
//{
//    const a = 1;
//    let b = 2;
//    var c = 3;
//}

//console.log(a + b);
//console.log(c);

// ES5
//(function() {
//    var c = 3;
//    
//})();

//console.log(c);

/* ------------------------------------------
Lecture: Strings
*/

//let firstName = "John";
//let lastName = "Smith";
//const yearOfBirth = 1990;
//
//function calculateAge(year) {
//    return 2016 - year;
//}
//
//// ES5
//console.log("This is " + firstName + " " + lastName + ". He was born in " + yearOfBirth + ". Today he is " + calculateAge(yearOfBirth) + " years old.");
//
//// ES6
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calculateAge(yearOfBirth)} years old.`);
//
//
//const n = `${firstName} ${lastName}`;
//console.log(n.toLowerCase().startsWith("j"));
//console.log(n.toLowerCase().endsWith("SM"));
//console.log(n.toLowerCase().includes("oh"));
//console.log(`${firstName} `.repeat(5));

/* ------------------------------------------
Lecture: Arrow functions
*/


//const years = [1990, 1965, 1982, 1937];
//
//// ES5
//var ages5 = years.map(function(current){
//    return 2016 - current;
//});
//
//console.log(ages5);
//
//
//// ES6
//let ages6 = years.map(el => 2016 - el);
//console.log(ages6);
//
//ages6 = years.map((el, i) => `Age element ${i + 1}: ${2016 - el}.`);
//console.log(ages6);
//
//ages6 = years.map((el, i) => {
//    const now = new Date(2016, 8, 16);
//    const age = now.getFullYear() - el;
//    return `Age element ${i + 1}: ${age}`;
//});
//console.log(ages6);

/* ------------------------------------------
Lecture: Arrow functions 2
*/
//
//// ES5
//var box5 = {
//    color: "green",
//    position: 1,
//    /*
//    This keyword
//    When used inside an object
//        - it will point to the object instance itself (so the object in memory and be able to view its contents)
//    
//    When used in a method
//        - It will still point to the object instance allowing full access to the object properties
//        
//    When used in a regular function
//        - It will point to the main window
//        
//    When used within an eventListener
//        - It will point to the targetElement (so e.target) 
//        
//        
//    
//    */
//    clickMe: function() {
//        document.querySelector(".green").addEventListener("click", function() {
//            var str = "This is box number " + this.position + " and it is " + this.color;
//            alert(str);
//        });  
//    },
//    // The fix around on this, is to define them as variables outside of the eventListeners
//    
////    clickMe: function() {
////       var self = this;
////       document.querySelector(".green").addEventListener("click", function() {
////            var str = "This is box number " + self.position + " and it is " + self.color;
////            alert(str);
////        });  
////    },
//};
//
////box5.clickMe();
//
//
//// ES6
//
//// With the arrow function (lamda expression) we have now access to the this keyword - rather it points to the actual object, because it belongs to the clickMe() method, which in turn belongs to the box6 object
//const box6 = {
//    color: "green",
//    position: 1,
//    clickMe: function() {
//        document.querySelector(".green").addEventListener("click", () => {
//            var str = "This is box number " + this.position + " and it is " + this.color;
//            alert(str);
//        });  
//    }
//}
//
//box6.clickMe();
//
//// Here in this example the this keyword is not shared with the box66 object, but rather the global context - as you can say that the arrow function can be almost treated the same as a regular function, so we have to be careful where we place the arrow function
////const box66 = {
////    color: "green",
////    position: 1,
////    clickMe: () => {
////        document.querySelector(".green").addEventListener("click", () => {
////            var str = "This is box number " + this.position + " and it is " + this.color;
////            alert(str);
////        });  
////    }
////}
////
////box66.clickMe();
//
//
//function Person(name) {
//    this.name = name;
//}
//
//// ES5
//Person.prototype.myFriends5 = function(friendsArr) {
//    // calling "this" within the method will work as normal
////    var self = this;
//    var arr = friendsArr.map(function(curr) {
//        // this keywork within this regular anonymous function will result that "this" points to the Window object and not the object instance that called it
//        return /*self.name*/ this.name + " is friends with " + curr;
//    }.bind(this));
//    /*Another cool trick it to use the bind() method on arr, because outside of the function curly braces, we are back in the method - so this points to the object instance that called this method*/
//    
//    console.log(arr);
//}
//
//Person.prototype.myFriends6 = function(friendsArr) {
//    var arr = friendsArr.map(curr => 
//         `${this.name} is friends with ${curr}`);
//    
//    console.log(arr);
//}
//
//var friends = ["Bob", "Jane", "Mark"];
//new Person("John").myFriends5(friends);
//new Person("Mike").myFriends6(friends);


/* ------------------------------------------
Lecture: Destructuring
*/
//
//
//// ES5 
////var john = ["John", 26];
////var name = john[0];
////var age = john[1];
//
//// ES6
//// It will store each of array contents to the respected position of the variables on the LHS
//
//// name:= "John"
//// age := 26
//
//// Depending on the Data structure, you will have to wrap the LHS according to it
//
//// So in this example, we have arrays, so we wrap the LHS with brackets, if it were an Object we wrap it round curly braces {}
//const [name, year] = ["John", 26];
//console.log(name);
//console.log(year);
//
//const obj = {
//    firstName: "John",
//    lastName: "Smith"
//};
//
//// These keys have to match the field names in the object
//const {firstName, lastName} = obj;
//console.log(firstName);
//console.log(lastName);
//
//// To have custom names we reference the keyname to a value like so in the destructuring side (LHS)
//const {firstName: a, lastName: b} = obj;
//console.log(a);
//console.log(b);
//
//
//function caclAgeAndRetirement(year) {
//    const age = new Date(2016, 8, 26).getFullYear() - year;
//    return [age, 65 - age];
//}
//
//
//let [age, retirement] = caclAgeAndRetirement(1990);
//
//console.log(age);
//console.log(retirement);

/* ------------------------------------------
Lecture: Arrays
*/

//const boxes = document.querySelectorAll(".box");

// ES5
/*var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(curr){
    curr.style.background = "dodgerblue";
})*/



// ES6
//const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(curr => curr.style.background = "dodgerBlue");

// Can be written like this, as the from() will return the Array instance

//Array.from(boxes).forEach(curr => curr.style.background = "dodgerBlue");

// ES5
/*for(var i=0; i<boxesArr5.length; i++) {
    var curr = boxesArr5[i];
    if(curr.className === "box blue") continue;
    
    curr.textContent = "I changed to blue!";
}*/

// ES6
/*for(const curr of boxesArr6) {
    if(curr.className.includes("blue")) continue;
    
    curr.textContent = "I changed to blue";
}

var ages = [12, 17, 8, 21, 14, 11, 18];

// ES5
//var fullAge = ages.map(function(cur) {
//    return cur >= 18;
//});
//console.log(fullAge.indexOf(true));
//console.log(ages[fullAge.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));

console.log(ages.find(cur => cur >= 18));
console.log(ages.filter(cur => cur >= 18));*/


/* ------------------------------------------
Lecture: Spread operator
*/

/*function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);



// ES5 
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Miller", "Bob", "Ann"];

const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");

const all = [h, ...boxes];
// Both the same
Array.from(all).forEach(cur => cur.style.color = "purple");

//[...all].forEach(cur => cur.style.color = "purple");*/



/* ------------------------------------------
Lecture: Rest Parameters
*/

// ES5
/*function isFullAge5() {
    var argsArray = Array.prototype.slice.call(arguments);
    
    argsArray.forEach(function(cur) {
        console.log((2016-cur) >= 18);
    });

}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016-cur) >= 18));
}

//isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);*/

//function isFullAge5(limit) {
//    var argsArray = Array.prototype.slice.call(arguments, 1);
//    
//    argsArray.forEach(function(cur) {
//        console.log((2016-cur) >= limit);
//    });
//
//}
//
//isFullAge5(16, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
//function isFullAge6(limit, ...years) {
//    years.forEach(cur => console.log((2016-cur) >= limit));
//}
//
////isFullAge6(21, 1990, 1999, 1965);
//isFullAge6(16, 1990, 1999, 1965, 2016, 1987);



/* ------------------------------------------
Lecture: Default Parameters
*/


// ES5 
//function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//    
//    this.lastName = lastName === undefined ? "Smith" : lastName;
//    
//    this.nationality = nationality === undefined ? "American" : nationality;
//    
//    this.firstName = firstName;
//    this.yearOfBirth = yearOfBirth;
//
//}
//
//var john = new SmithPerson("John", 1990);
//var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");

// ES6
/*
To skip parameters you specify them in that order but with a undefined
    
    function SmithPerson(firstName, lastName="Smith), yearOfBith, nationality="American") {...}
    
Like so    
    SmithPerson("John, undefined, 1990);
    
*/
function SmithPerson(firstName, yearOfBirth, lastName="Smith", nationality="American") {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;

}

var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "Spanish");


/* ------------------------------------------
Lecture: Maps
*/



//const question = new Map();
//question.set("question", "What is the official name of the latest major JavaScript version?");
//
//question.set(1, "ES5");
//question.set(2, "ES6");
//question.set(3, "ES2015");
//question.set(4, "ES7");
//question.set("correct", 3);
//question.set(true, "correct answer");
//question.set(false, "Incorrect answer, please try again");

//console.log(question.get("question"));
//console.log(question.size);

//if(question.has(4)) {
//    question.delete(4);
//    console.log("Answer 4 is here");
//}
//question.clear();

//question.forEach((v, k) => console.log(`${k}: ${v}`));

//let arr = [1, 2, 3, 4, 5];

/*
    - We use for..in for arrays
    - We use for..of for objects - like instances from classes, Maps etc...

*/
//for(let [cur, i] in arr) {
//    console.log(`Current value is ${cur}, and the index is ${i}`);
//}

//for(let [key, value] of question.entries()) {
//    if(typeof(key) === "number") {
//        console.log(`Answer ${key}: ${value}`);
//    }
//}
//
//const ans = parseInt(prompt("Write the correct answer"));
//
//console.log(question.get(question.get("correct") === ans));


/* ------------------------------------------
Lecture: Classes
*/

/*// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date(2016, 8, 26).getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5("John", 1990, "teacher");

// ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        const age = new Date(2016, 8, 26).getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log("Hey there!");
    }
}

const john6 = new Person6("John", 1990, "teacher");

john5.calculateAge();
john6.calculateAge();*/

//Person6.greeting();


/* ------------------------------------------
Lecture: Classes and Subclasses
*/

//// ES5
//var Person5 = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calculateAge = function() {
//    var age = new Date(2016, 8, 26).getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//
//var john5 = new Person5("John", 1990, "teacher");
//
///*
//We use the call method on the Function Constructor, and what this is effectively doing is calling the new operator on the Person5 construtor - the keyword "this" is pointing to a Athelete object - meaning that we are telling it to set the name, yearOfBirth and the job to the Athelete object
//
//
//*/
//var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//    Person5.call(this, name, yearOfBirth, job);
//    this.olympicGames = olympicGames;
//    this.medals = medals;
//    
//}
//
///*
//This is done to preserve the prototype chain - we must be done if we want to access methods within Person5 prototypes 
//
//so if we call Athlete5.prototype.calculateAge()
//    - JS will look in the Athelete5 prototype first to see if there is a method called calculateAge within the Athelete5 prototype 
//    Which there isn't one
//    - So it will go up the chain to Person5 prototypes, and there is find its and calls it
//    
//If JS could not find in Person5 prototypes, then it will go up one to the Object prototypes and if its is not there, it will go up one again to reach null - there it will stop and throw an exception saying that the method calculateAge() does not exist
//
//To add methods to the Athelete5 prototype, it must be done after we have connected the Athelete5 and Person5 prototypes together
//
//*/
//
//
//
//Athlete5.prototype = Object.create(Person5.prototype);
//
//Athlete5.prototype.wonMedal = function() {
//    this.medals++;
//    console.log(this.medals);
//}
//
//
//var johnAthelete5 = new Athlete5("John", "1990", "Swimmer", 3, 10);
//
//
//johnAthelete5.calculateAge();
//johnAthelete5.wonMedal();
//
//
//
//// ES6
//class Person6 {
//    constructor(name, yearOfBirth, job) {
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    
//    calculateAge() {
//        const age = new Date(2016, 8, 26).getFullYear() - this.yearOfBirth;
//        console.log(age);
//    }
//    
//}
//
//class Athlete6 extends Person6 {
//    constructor(name, yearOfBirth, job, olympicGames, medals) {
//        super(name, yearOfBirth, job);
//        this.olympicGames = this.olympicGames;
//        this.medals = medals;
//    }
//    
//    wonMedals() {
//        this.medals++;
//        console.log(this.medals);
//    }
//}
//
//
//var johnAthelete6 = new Athlete6("John", "1990", "Swimmer", 3, 10);
//
//
//johnAthelete6.calculateAge();
//johnAthelete6.wonMedals();


/* ------------------------------------------
Lecture: CODING CHALLENGE
*/


/*
Suppose that you are working in a small town adminstaration, and you are in charge of 2 town elements
    1. Parks
    2. Streets

It is a very small town, so right now there are only 3 parks and 4 streets. All partks and streets have a name and a build year

At an end-of-year meeting, your boss wants a final report with the following:
    1. Tree density of each park in the town
    formula: number of trees / park area
    
    2. Average age of each town's park
    forumla: sum of all ages/ number of parks
    
    3. The name of the park that has more than 100 trees
    
    4. Total and average length of the town's streets
    
    5. Size and classification of all streets: tiny/ small/ normal/ big/ huge. If the size is unknownn, the default is normal
    

All the report data should be printed to the console


HINT: Use some of the ES6 features: classes, subclasses, Semplate Strings, default parameters, maps, arrow functions, destructring, etc.

*/

const parkCtrl = (function() {
    class Park {

        constructor(name, buildYear, numberOfTrees, parkArea) {
            this.name = name;
            this.buildYear = buildYear;
            this.numberOfTrees = numberOfTrees;
            this.parkArea = parkArea;
        }

        calculateTreeDensity() {
            return this.numberOfTrees / this.parkArea;
        }

    }

    let parks;

    const createParkMap = function() {
        parks = new Map();

        const park1 = new Park("Green Park", 1989, 5000, 55);
        const park2 = new Park("National Park", 1957, 589856, 85);
        const park3 = new Park("Oak Park", 2000, 23650, 65);

        parks.set("park1", park1);
        parks.set("park2", park2);
        parks.set("park3", park3);
        
        
    }
    
    const parkReport = function() {
        
        // 0. Create parks
        console.log("---PARKS REPORT---");
        createParkMap();
        
        // 1. Calculate Tree Density
        // 2. Output Tree Density
        printTreeDensity(parks);
        
        // 3. Calculate Average Ages
        const avgAge = calcAvgAge(parks);
        
        // 4. Output Average Ages
        printAverageOfParks(avgAge);
        
        // 5. Calculate park that has more than 1000 trees
        // 6. Output 100 trees
        printGreaterThan100Trees(parks);
        
    }
    
    const calcAvgAge = function(parks) {
        let sum = 0;
        const size = parks.size;
        for(const v of parks.values()) {
            sum += v.buildYear;
        }
        return sum / parks.size;
    }

    
    const printGreaterThan100Trees = function(parks, callback=(park) => [park[1].numberOfTrees > 1000, park[1].name]) {
        for(const park of parks) {
            const [treeBool, parkName] = callback(park);
            if(treeBool) {
                console.log(`${parkName} has more than 1000 trees`);
            }
        }
    }

    const printTreeDensity = function(parks) {
        for(const v of parks.values()) {
            console.log(`${v.name} has a tree density of ${v.calculateTreeDensity()} trees per square km.`);
        }
    }

    const printAverageOfParks = function(avgAge) {
        console.log(`Our ${parks.size} parks have an average age of ${avgAge} years. `);
    }
    
    return {
        report: parkReport
    }
    
})();

const streetCtrl = (function() {
    class Street {
        constructor(name, buildYear, length) {
            this.name = name;
            this.buildYear = buildYear;
            this.length = length;
        }
        
        getClassification() {
            let msg;
            if(this.length < 1) {
                msg = "tiny";
            } else if(this.length < 5) {
                msg = "small";
            } else if(this.length < 10) {
                msg = "normal";
            } else if(this.length < 25) {
                msg = "big";        
            } else if (this.length <= 50) {
                msg = "huge";
            }
            return msg;
        }
    }
    
    let streets;
    
    const createStreets = function() {
        streets = new Map();
        streets.set("street1", new Street("Ocean Avenue", 1999, 36));
        
        streets.set("street2", new Street("Evergreen Street", 2008, .5));
        
        streets.set("street3", new Street("4th Street", 2015, 20));
        
        streets.set("street4", new Street("Sunset Boulevard", 1982, 45));
        
        
    }
    
    const streetReport = function() {
        
        // 0. Create Streets and output report
        console.log("---STREETS REPORT---")
        createStreets();
        
        // 1. Calculate total and avg lengths
        const totalLen = totalLength();
        const avgLen = avgLength();
        
        // 2. Output total and avg lengths
        printTotalLengths(totalLen);
        printAvgLengths(avgLen);
        
        // 3. Output all the street verbosely
        verboseStreets();
    }
    
    const totalLength = function() {
        let sum = 0;
        for(const v of streets.values()) {
            sum += v.length;
        }
        return sum;
    }
    
    const avgLength = function () {
        let sum = 0;
        for(const v of streets.values()) {
            sum += v.length;
        }
        return sum / streets.size;
    }
    
    const printTotalLengths = function (totalLength) {
        console.log(`Our 4 streets have a total length of ${totalLength} km.`);
    }
    
    const printAvgLengths = function(avgLength) {
        console.log(`With an average length of ${avgLength} km.`)
    }
    
    const verboseStreets = function() {
        for(const v of streets.values()) {
            console.log(`${v.name}, built in ${v.buildYear}, is a ${v.getClassification()}.`)
        }
    }
    
    return {
        report: streetReport
    }
})();

parkCtrl.report();
streetCtrl.report();

































