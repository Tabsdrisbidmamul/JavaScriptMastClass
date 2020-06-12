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
Lecture: Blocks and IIFEs
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


// ES5 
//var john = ["John", 26];
//var name = john[0];
//var age = john[1];

// ES6
// It will store each of array contents to the respected position of the variables on the LHS

// name:= "John"
// age := 26

// Depending on the Data structure, you will have to wrap the LHS according to it

// So in this example, we have arrays, so we wrap the LHS with brackets, if it were an Object we wrap it round curly braces {}
const [name, year] = ["John", 26];
console.log(name);
console.log(year);

const obj = {
    firstName: "John",
    lastName: "Smith"
};

// These keys have to match the field names in the object
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// To have custom names we reference the keyname to a value like so in the destructuring side (LHS)
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function caclAgeAndRetirement(year) {
    const age = new Date(2016, 8, 26).getFullYear() - year;
    return [age, 65 - age];
}


let [age, retirement] = caclAgeAndRetirement(1990);

console.log(age);
console.log(retirement);






















































































