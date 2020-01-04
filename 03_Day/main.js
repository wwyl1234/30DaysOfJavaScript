// Day 3: Exercises

// Data types part
let firstName = "Winnie";
let lastName = "Lam";
let country = "Canada";
let city = "Somewhere";
let age = 60;
let isMarried = undefined;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));

// Arithmetic Operators part
let operandOne = 4;
let operandTwo = 3;

console.log(operandOne + operandTwo);
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo);
console.log(operandOne ** operandTwo);
console.log(operandOne++);
console.log(operandOne--);

// Booleans Part
// true statements
null == false;
0 == false;
"" == false;

// false statements
1 == true;
"2" === 2;
10 == 1;

// Comparison Operators
/*
*    4 > 3    true
*    4 >= 3   true
*    4 < 3    false
*    4 <= 3   false
*    4 == 4   true
*    4 === 4   true
*    4 != 4    false
*    4 !== 4   false
*    4 != '4'   false
*    4 == '4'  true
*    4 === '4'  true
*/

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('----');

// Logical Operators
/*
*
*    4 > 3 && 10 < 12  true
*    4 > 3 && 10 > 12  false
*    4 > 3 || 10 < 12   true
*    4 > 3 || 10 > 12   true
*    !(4 > 3)    false
*    !(4 < 3)    true
*    !(false)    true
*    !(4 > 3 && 10 < 12)   false
*    !(4 > 3 && 10 > 12)   true
*    !(4 === '4')   true
*/

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// Ternary Operator

firstName.length > 7
 ? console.log(`Your name is long.`)
 : console.log(`Your name is short`);

 firstName.length > lastName.length
  ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
  : console.log(`Your first name, ${firstName} is not longer than your family name, ${lastName}`);

let myAge = 250
let yourAge = 25

myAge >= yourAge
 ? console.log(`I am ${myAge - yourAge} years older than you.`)
 : console.log(`I am ${yourAge - myAge} years younger than you.`);


let userAge = prompt('How old are you?', 'number goes here');

userAge >= 18
 ? console.log(`You are ${userAge}. You are old enough to drive`)
 : console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`)


// Date time Object
const now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let epochSec = now.getTime();

console.log(year, month, date, day, hours, minutes, epochSec);
//Create a human readable time format
let pMonth = (month.toString()).padStart(2, "0");
let pDate = (date.toString()).padStart(2, "0");

//    YYYY-MM-DD HH:mm:ss
console.log(`${year}-${pMonth}-${pDate} ${hours}:${minutes}:${seconds}`);
//    DD-MM-YYYY HH:mm:ss
console.log(`${pDate}-${pMonth}-${year} ${hours}:${minutes}:${seconds}`);
//    DD/MM/YYY HH:mm:ss
console.log(`${pDate}/${pMonth}/${year} ${hours}:${minutes}:${seconds}`);
