// // CONCATENATE 
// var greeting = 'Hello';
// greeting = greeting + ' Yo!';
// console.log(greeting);

// console.log("--------------------------------");

// // UPPERCASE > LOWERCASE
// var capitalGreet = greeting.toUpperCase();
// var lowerCaseGreet = greeting.toLowerCase();
// console.log('capitalGreet:', capitalGreet);
// console.log('lowerCaseGreet:', lowerCaseGreet);

// console.log("--------------------------------");

// // SPLIT
// var sentence = 'the quick brown fox jumped over the lazy dog';
// var words = sentence.split(' ');
// console.log(words);

// console.log("--------------------------------");

// // // BACKTICK 
// // var firstName = 'Brendan';
// // var lastName = 'Erich';
// // console.log('firstName', firstName);
// // console.log('lastName', lastName);
// // var fullName = `
// // Full Name

// // ---

// // First Name: ${firstName}
// // Last Name: ${lastName}`;
// // console.log(fullName);

// console.log("--------------------------------");

// // TAX
// var price = 23.09;
// var tax = 0.088;
// var total = price * (1 + tax);
// console.log(total);

// console.log("--------------------------------");

// // ITERATION
// var age = 31;
// age++;
// console.log(age);
// age--;
// console.log(age);

// console.log("--------------------------------");

// // ARRAYS
// var favoriteThings = ['dogs', 'cats', 'friends'];
// var firstThing = favoriteThings[0];
// var secondThing = favoriteThings[1];
// var thirdThing = favoriteThings[2];
// console.log(`I like ${firstThing}, ${secondThing}, and ${thirdThing}`);


// var car = {
//   make: 'Tesla',
//   model: 'Model 3',
//   color: 'red'
// };
// var key = 'color';

// console.log("--------------------------------");

// // SELECTING DATA
// console.log(`Car Make: ${car.make}`);
// console.log(`Car Make: ${car['model']}`);
// console.log(`Car Color: ${car[key]}`);
// car.engineSound = 'Vroom!!!';
// console.log(`Car Engine Sound: ${car.engineSound}`);

// console.log("--------------------------------");

// var areSame = 10 == '10';
// console.log('areSame:', areSame);

// var areSame1 = false == 0;
// console.log('false == 0', areSame1);

// var areSame2 = false == '';
// console.log('false == "":', areSame2);

// var areSame3 = true == '1';
// console.log('true == "1"', areSame3);

// var areSame4 = null == undefined;
// console.log('null == undefined', areSame4);

// // We can check if values are not exactly the same by using the !== operator, as demonstrated in the code below:

// var areSame1 = 10 !== 10;
// console.log('areSame1:', areSame1);

// var areSame2 = 6 !== '6';
// console.log('areSame2:', areSame2);

// console.log("--------------------------------");

// // IF STATEMENT
// var shouldExecute = true;

// if (shouldExecute === true) {
//   console.log('Ahhhh, it worked!');
// }


// // ELSE and ELSE IF - to isolate a range or specific variable
// var num = 9;
//  if (num > 10) {
//   console.log('num is more than 10!');
//  } else if (num < 8) {
//   console.log('num is less than 8!')
//  } else {
//   console.log('num is somewhere between 8 and 10');
//  }

//  console.log("--------------------------------");


// // Logical AND and OR
// var num = 6
// // BOTH conditions must be true
// if (num > 3 && num < 10) {
//   console.log('The number is larger than 3 AND smaller than 10');
// }

// var num = 6;

// console.log("--------------------------------");

// // EITHER condition must be true
// if (num === 6 || num > 10) {
//   console.log('The number is equal to six or larger than 10');
// }

// console.log("--------------------------------");

// // Count/iterate from 1 - 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log("--------------------------------");

// // Count down / decrement
// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// console.log("--------------------------------");
// // While loops
// var counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

// console.log("--------------------------------");

// // COUNT EVERY OTHER WITH WHILE
// var counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter += 2;
// }

// console.log("---------------Strange Kids-----------------");

// // forEach
// var strangeKids = ['Will', 'Mike', 'Lucas', 'Dustin', 'Max', 'Eleven'];

// strangeKids.forEach(function(kid, index) {
//   console.log(`${index + 1}. ${kid}`);
// });
// console.log("-------------Favorite Movies-------------------");
// var favoriteMovies = ['Aliens', 'Eternal Sunshine for the Spotless Mind', 'Ready Player One', 'Venom'];

// favoriteMovies.forEach(function(movie, index) {
//   console.log(`${index + 1}. ${movie}`);
// });




// var multiply = (num1, num2) => num1 * num2;

// var divide = (num1, num2) => {
//   var quotient = num1 / num2;
//   return quotient;
// }


// console.log(multiply(4, 8));
// console.log(divide(21, 7));

// console.log("--------------------------------");

// var dog = {
//   name: 'Fido',
//   sound: 'Woof!!!',
//   readCollar: function() {
//     console.log(this.name);
//   },
//   speak: function() {
//     console.log(this.sound);
//   }, 
//   speakAfterWait: function(timeInSeconds) {
//     setTimeout(this.speak, timeInSeconds * 1000);
//   }
// };

// dog.readCollar();
// dog.speak();
// dog.speakAfterWait(2);

// console.log("--------------------------------");
// console.log("-------FUNCTIONS YO!------");
// console.log("--------------------------------");

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

function fullName(first, last) {
  return `${first} ${last}!`;
}

var name = fullName('John', 'Smith');
sayHello(name);

console.log("--------------------------------");

// Function Deceleration
function subtract(num1, num2) {
  var difference = num1 - num2;
  return difference;
}

var difference = subtract(11, 4);
console.log(difference);

console.log("--------------------------------");

var sum = add(6, 7);

console.log(sum);

function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

console.log("--------------------------------");

// Function Expressions
var multiply = function (num1, num2) {
  var product = num1 * num2;
  return product;
};

var product = multiply(3, 4);
console.log(product);

console.log("--------------------------------");

// Arrow functions
var multiply = (num1, num2) => num1 * 


console.log("--------------------------------");

// Iterations before and after returning
var num = 0;
console.log(num++); // logs 0 - num is incremented AFTER it was returned
console.log(num); // logs 1 - num was incremented after the previous log
console.log(++num); // logs 2 - num is incremented BEFORE being returned

