/*-----------------------------------------
* Variables and data types
*/

/*var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

console.log(firstName + " " + lastName + " is " + age + " old.")

var fullAge = true;
console.log(fullAge)

var job;
console.log(job);

job = "Teacher";
console.log(job);

var test = null;
console.log(test);*/

// Variable Naming Conventions
//var _3years = 3;
//var $johnMark = "John and Mark";
//var if = 23; <- reserved keywords are not allowed to be used as variable names

/*-----------------------------------------
* Variables mutation and type coercion
*/

/*var firstName = "John";
var age = 28;

// Type Coercion
console.log(firstName + " " + age);

var job, isMarried;
job = "Teacher";
isMarried = false;


console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// Variable Mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);*/


/*-----------------------------------------
* Basic Operators
*/

/*var year, yearJohn, yearMark; 
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);*/


/*-----------------------------------------
* Operator Precedence
*/

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators, Tenary Operator
var isFullAge = now - yearJohn >= fullAge;

//var isFullAge = now - yearJohn >= fullAge ? true: false;

console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x **= 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);*/

/*-----------------------------------------
*  CODING CHALLENGE 1
*/

/*
BMI with John and Mark
BMI = mass / height ^ 2

1. Store Mark and John's mass and height in vars
2. Calculate both their BMIs
3. Create a boolean variable containning information about whether Mark has a hight BMI than John
4. Print a string to the console containing the variable from step 3.


*/

/*var massJohn, massMark, heightJohn, heightMark, isBmi;
massJohn = 80;
massMark = 70;

heightJohn = 1.8;
heightMark = 1.65;

var bmiJohn = massJohn / (heightJohn ** 2);
var bmiMark = massMark / (heightMark ** 2);

isBmi = bmiJohn > bmiMark;

console.log("is Mark's BMI is lower than John: " + isBmi)*/

/*-----------------------------------------
*  if/ else statements
*/

//var firstName = "John";
//var civilStatus = "single";
//
//if (civilStatus === "married") {
//    console.log(firstName + " is married");
//} else {
//    console.log(firstName + " is " + civilStatus);
//}
//
//
//var isMarried = false;
//if (!isMarried) {
//    console.log(firstName + " is married");
//} else {
//    console.log(firstName + " is " + civilStatus);
//}
//
//
//var massJohn, massMark, heightJohn, heightMark, isBmi;
//massJohn = 80;
//massMark = 70;
//
//heightJohn = 1.8;
//heightMark = 1.65;
//
//var bmiJohn = massJohn / (heightJohn ** 2);
//var bmiMark = massMark / (heightMark ** 2);
//
//if(bmiJohn > bmiMark) {
//    console.log("John's BMI is higher than Mark's ")
//} else {
//    console.log("John's BMI is lower than Mark's ")
//}

/*-----------------------------------------
*  Boolean Logic
*/

/*
var firstName = "John";
var age = 20;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (age < 20) { // between 13 and 20
    console.log(firstName + " is a teenager.");    
} else if(age < 30) {
    console.log(firstName + " is a young-man");
} else {
    console.log(firstName + " is a man.");
}
*/


/*-----------------------------------------
*  Tenary Operator
*/

/*
var firstName = "John";
var age = 16;

age >= 18 ? console.log(firstName + " drinks beer") : console.log(firstName + " drink juice");

var drink = age >= 18 ? "beer" : "juice";

console.log(drink)

if(age >= 18) {
    var drink = "beer";
} else {
    var drink = "juice";
}

var job = "Teacher";

switch (job.toLowerCase()) {
    case "teacher": 
    case "instructor":
        console.log(firstName + " teaches children how to code");
        break;
    case "driver":
        console.log(firstName + " driver an Uber in Libson.");
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites");
        break;
    default:
        console.log(firstName + " does something else");
        break;
}

var age = 20;

switch (true) {
    case age < 13:
        console.log(firstName + " is a boy.");
        break;
    case age < 20:
        console.log(firstName + " is a teenager.");  
        break;
    case age < 30:
        console.log(firstName + " is a young-man"); 
        break;
    default:
        console.log(firstName + " is a man.");
        break;
}
*/


/*-----------------------------------------
*  Truthy and Falsy values and equality operators
*/

// false values: undefined, null, 0, "", Nan
// truthy values: NOT falsy values

/*var height;

height = 23;

if(height || height === 0) {
    console.log("Variable is defined");
} else {
    console.log("Variable has NOT been defined");
}


// Equality Operator
if (height == "23") {
    console.log("The == operator does type coercion!")
}*/


/*-----------------------------------------
*  CODING CHALLENGE 2
*/


/*
John and Mike both play basketball in different teams
John's teams score: 89, 120, 103
Mike's teams score: 116, 94, 123

1. calculate the average score for each team
2. decide which team wins in average, and print the winner to the console
3. Change the scores to show different winners

4. EXTRA: Mary plays as well
Mary's team score: 97, 134, 105

*/


/*var avgScore = function(score1, score2, score3, numOfPlays) {
    return (score1 + score2 + score3) / numOfPlays;
}

var avgJohnsTeam = avgScore(100, 100, 100, 3);
var avgMikesTeam = avgScore(20, 20, 20, 3);
var avgJohnsTeam = avgScore(97, 134, 105, 3);

if (avgJohnsTeam > avgMikesTeam) {
    console.log("John's team has a higher score\nJohn's score: " + avgJohnsTeam + "\nMike's score: " + avgMikesTeam);
} else if(avgJohnsTeam === avgMikesTeam) {
          console.log("Its a draw");
}
else {
        console.log("John's team has a lower score\nJohn's score: " + avgJohnsTeam + "\nMike's score: " + avgMikesTeam);
}*/


/*-----------------------------------------
*  Functions
*/

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirment(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years");
    } else {
        console.log(firstName + " is already retired.")
    }
}

yearsUntilRetirment(1990, "John");
yearsUntilRetirment(1948, "Mike");
yearsUntilRetirment(1969, "Jane");*/

/*-----------------------------------------
*  Function statements and expressions
*/

// function declaration
//function whatDoYouDo(job, firstName) {}

// function expression
/*var whatDoYouDo = function(job, firstName) {
    switch(job.toLowerCase()) {
        case "teacher":
            return firstName + " teaches kids how to code";
        case "driver":
            return firstName + " drives an Uber to Libson";
        case "designer":
            return firstName + " designes beautiful websites";
        default:
            return firstName + " does something else";
    }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));*/

/*-----------------------------------------
*  Arrays
*/

/*// Initalise new Array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate Array Data
names[1] = "Ben";
console.log(names);

names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "designer", false];
john.push("blue");
john.unshift("Mr");

console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(23));

var isDesigner = john.indexOf("designer") === -1 ? "John is NOT a designer" : "John IS a designer";

console.log(isDesigner);*/


/*-----------------------------------------
*  CODING CHALLENGE 3
*/


/*

John and his family went on holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fait amount, john created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip)

*/

/*function calculateBill(amount) {
    if(amount < 0) {
        return -1;
    }
    
    if(amount < 50) {
        return amount * 0.2;
    } else if (amount < 200) {
        return amount * 0.15;
    } else {
        return amount * 0.1;
    }
}

var tipArray = [(calculateBill(124)),
               (calculateBill(48)),
               (calculateBill(268))];

var finalBillArray = [
    (124 + calculateBill(124)),
    (48 + calculateBill(48)),
    (268 + calculateBill(268))];

console.log(tipArray);
console.log(finalBillArray);*/

/*-----------------------------------------
*  Objects and properties
*/

/*// Creating Objects
// Object Literal
var john = {    // John Obj
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false
};

// new Object Syntax
var jane = new Object();    // Jane Obj

// John Obj references
console.log(john.firstName);
var x = "birthYear";
console.log(john["lastName"]);
console.log(john[x]);

// Mutating Objects
john.job = "designer";
john['isMarried'] = true;
console.log(john);


// Jane Obj references
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);*/


/*-----------------------------------------
*  Objects and methods
*/

/*var john = {    // John Obj
    firstName: "John",
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    
    calcAge: function(year) {
        this.age = year - this.birthYear;
    }
    
};

john.calcAge(2018);
console.log(john);*/



/*-----------------------------------------
*  CODING CHALLENGE 4  
*/

/*
Using the first coding challenge with John and Mark and their BMIs, lets implement it instead with objects instead

1. For each of them, create an object with properties for their full name, mass and height
2. Then add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method
3. In the end, log to the console who has the highest BMI together with the full name, and the respective BMI

BMI = mass / (height ^ 2)

*/

/*
function Person(firstName, lastName, mass, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mass = mass;
    this.height = height;
    
    this.calcBmi = function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

var john = new Person("John", "Smith", 80, 1.8);
var mark = new Person("Mark", "Dodger", 70, 1.65);

function outputBMI(person) {
    console.log(person.firstName + " " + person.lastName + " BMI is:\n" + person.bmi); 
}

function compareBmi(person1, person2) {
    if(person1.calcBmi() > person2.calcBmi()) {
        console.log(person1.firstName + " has got a higher BMI than " + person2.firstName);
        
        outputBMI(person1);
        outputBMI(person2);
    } else {
        console.log(person1.firstName + " has got a lower BMI than " + person2.firstName);
        
        outputBMI(person1);
        outputBMI(person2);
    }
}

compareBmi(john, mark);

console.log(john);
console.log(mark);*/

/*-----------------------------------------
*  Loops and iteration
*/

/*for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

var john = ["John", "Smith", 1990, "designer", false];

// for loop
for(var i=0; i<john.length; i++) {
    console.log(john[i]);
}

// while loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}*/

/*var john = ["John", "Smith", 1990, "designer", false, "blue"];

 for loop
for(var i=0; i<john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i=0; i<john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

for(var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}*/

/*-----------------------------------------
*  CODING CHALLENGE 5
*/

/*
The tip calculator but with this time, using objects and loops

John and his family went to 5 different restaurants. The bilss were $124, $48, $268, $180 and $42

John tips 20% of the bill when the bill is less than $50, 15% of the bill when the bill is between $50 and $200, 10% if the bill is more than $200

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all paid bills and do the tip calculations
4. As an output create (1) a new array containing all tips and (2) an array containing final paid amounts (bill + tips)

EXTRA: Mark's family went on holiday as well going to 4 different restaurants
bills were: $77, $375, $110 and $45
Marks likes to tip 20% of the bill when it is less $100, 10% when the bill is between $100 and $300 and 25% when the bill is more than $300

*/


class Bills {
    constructor(...bills) {
        this.billArray = []
        this.tipArray = [];
        this.finalBillArray = [];
        for(var i=0; i<bills.length; i++) {
            this.billArray.push(bills[i]);
        }
    }
    
    calculateBill(isJohn) {
        for(var x=0; x<this.billArray.length; x++) {
            if(x < 50) {
                this.calculateBillAddToArray(this.billArray[x], .2);
            } else if (x < 200) {
                this.calculateBillAddToArray(this.billArray[x], .15);
            } else {
                this.calculateBillAddToArray(this.billArray[x], .1);
            } 
        }
    }
    
    calculateBillAddToArray(bill, percentage) {
        var temp = bill * percentage
        this.tipArray.push(temp);
        this.finalBillArray.push(bill + temp);
    }
    
    calculateAverageTip() {
        if(this.tipArray.length) {
            var sum = 0;
            for(var i=0; i<this.tipArray.length; i++) {
                sum += this.tipArray[i];
            }
            this.averageTip = sum / this.tipArray.length;
            return this.averageTip;
        }
        return -1;
        
    }
    
    get getTipArray() {
        return this.tipArray;
    }
    
    get getFinalBillArray() {
        return this.finalBillArray;
    }
    
    get getBillArray() {
        return this.billArray;
    }
    
}

function calculateBill(bill) {

    if (x < 100) {
        bill.calculateBillAddToArray(bill.getBillArray[x], .2);
    } else if (x < 300) {
        bill.calculateBillAddToArray(bill.getBillArray[x], .1);
    } else {
        bill.calculateBillAddToArray(bill.getBillArray[x], .25);
    }    
}

var billJohn = new Bills(124, 48, 268, 180, 42);
billJohn.calculateBill();
billJohn.calculateAverageTip();
console.log("John's Bill");
console.log(billJohn);
console.log(billJohn.getBillArray);
console.log(billJohn.getTipArray);
console.log(billJohn.getFinalBillArray);

var billMark = new Bills(77, 375, 110, 45);
billMark.calculateBill(billMark);
billMark.calculateAverageTip();
console.log("Mark's Bill");
console.log(billMark);
console.log(billMark.getBillArray);
console.log(billMark.getTipArray);
console.log(billMark.getFinalBillArray);

