// Function constructor

/*var john = {
    name: "John",
    yearOfBirth: 1990,
    job: "teacher"
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith";


var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/


// Object.create
/*var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1969 },
    job: { value: "designer" }
});*/


// Primitives vs. Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Libson"
};

function change(a, b) {
    a = 30;
    b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);*/

/*---------------------------------------------------
Lecture: Passing functions as arguments
*/

/*var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i< arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    return el >=18 && el <= 81 ?  
    Math.round(206.9 - (0.67 * el)) : -1;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate)

console.log(ages);
console.log(fullAges);
console.log(rates);*/

/*---------------------------------------------------
Lecture: Functions returning Funcions
*/


/*function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(`${name} can you please what explain UX design is?`)
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log(`What subject do you teach, ${name}?`)
        }
    } else {
        return function(name) {
            console.log(`Hello ${name}, what do you do?`)
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var desginerQuestion = interviewQuestion("designer");
teacherQuestion("John");
desginerQuestion("John");
desginerQuestion("Jane");
desginerQuestion("Mark");
desginerQuestion("Mike");

interviewQuestion("teacher")("Mark");*/

/*---------------------------------------------------
Lecture: Functions returning Funcions
*/

/*function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();*/

/*(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);*/


/*---------------------------------------------------
Lecture: Closures
*/

/*function retirement(retirementAge) {
    var a = " years until retirement.";
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    } 
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job) {
    var msg;
    return function(name) {
        if(job === "teacher") {
            msg = `What subject do you teach, ${name}?`;
        } else if (job === "designer") {
            msg = `${name} can you please what explain UX design is?`;
        } else {
            msg = `Hello ${name}, what do you do?`;
        }
        console.log(msg);
    }
}

var teacherQuestion = interviewQuestion("teacher");
var desginerQuestion = interviewQuestion("designer");
teacherQuestion("John");
desginerQuestion("Jane");

interviewQuestion("teacher")("Phil");
desginerQuestion("Mark");*/


/*---------------------------------------------------
Lecture: Bind, Call and Apply methods
*/

/*var john = {
    name: "John",
    age: 26,
    job: "teacher",
    
    presentation: function(style, timeOfDay) {
        if(style === "formal") {
            console.log(`Good ${timeOfDay} Ladies and Gentleman! I'm ${this.name}, and I'm a ${this.job} and ${this.age} years old.`);
        } else if (style === "friendly") {
            console.log(`Hey! What's up I'm ${this.name}, and I'm a ${this.job} and ${this.age} years old. Have a nice ${timeOfDay}.`);
        }
    }
}

var emily = {
    name: "Emily",
    age: 35,
    job: "designer"
}

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");

john.presentation.apply(emily, ["friendly", "afternoon"]);

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");

emilyFormal("afternoon");


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i=0; i< arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);


var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

// Same as above but placing the binded function into a variable
//var japanAgeLimit = isFullAge.bind(this, 20);
//var japanAges = arrayCalc(ages, japanAgeLimit);
//console.log(ages);
//console.log(japanAges);*/


/*---------------------------------------------------
CODING CHALLENGE 
*/

/*
Lets build a fun quiz game in the console!

1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers, from which the player can choose the correct one (choose an adequate data structure here: array, object etc.)
    c) correct answer (I would use a number for this)

2. Create a couple of question using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers. (each question should have a number) (Hint: write a method for the Question objects for this task)

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you dsiplayed it on Task 4.

6. Check if the answer is corrcet and print to the console whether the answer is correct or not (Hint: write another method for this)

7. Suppose this code would be a plugin for other programmers to use in thier code. So make sure that all your code is private and does not interfere with other programmer's code (Hint: we learned special techniques to do exactly that).


*/



(function() {
    var Question = function(question, answerArray, answerPos) {
        this.question = question;
        this.answerArray = answerArray;
        this.answerPos = answerPos;
    }

    var question1 = new Question("What colour is the sky, in the afternoon?", ["blue", "grey", "red", "black"], 0);

    var question2 = new Question("What is cos(0)?", ["0", "1", "-1"], 1);

    var question3 = new Question("Is light a particle or a wave?", ["Its a wave", "Its a particle", "Its a wave and a particle", "None of the above"], 2);

    var questionArray = [question1, question2, question3];

    function randomQuestion() {
        var random = Math.floor(Math.random() * questionArray.length);
        return questionArray[random];
    }

    Question.prototype.readQuestion = function() {
        var msg;
        msg = `${this.question}\n`;
        for(var i=0; i<this.answerArray.length; i++) {
            msg += `${i}: ${this.answerArray[i]}\n`;
        }
        msg += "What is the answer?";
        console.log(msg);
    }

    Question.prototype.checkAnswer = function(answerPos) {
        var msg;
        var isCorrectAnswer = this.answerPos == answerPos;
        return function outputAnswer() {
            msg = isCorrectAnswer ? "Well done! That's the correct answer" : "I think you might want to try again";
            console.log(msg);
            return isCorrectAnswer;
        } 
    }
    
    var score = 0;
    while(true) {
        var question = randomQuestion();

        console.log(`Current score: ${score}`);
        var answer = prompt(question.readQuestion());

        if(answer === "quit") {
            break;
        }

        var isAnswerCorrect = question.checkAnswer(answer)();

        if (!isAnswerCorrect) {
            console.log(`Current score: ${score}`);
            var answer = prompt(question.readQuestion());

            if(answer === "quit") {
                break;
            }

            var isAnswerCorrect = question.checkAnswer(answer)();

            if(isAnswerCorrect) score++;

        } else {
            score++;
        }
    }
})();

















































