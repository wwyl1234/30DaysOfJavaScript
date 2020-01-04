// this is your main.js script
// String Part
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(2)); // cut the first word
console.log(challenge.substr(0, 2)); // 30

let phrase = 'You cannot end a sentence with because because because is a conjunction';
let newPhrase = phrase.substr(0, 30) + phrase.substr(54);
console.log(newPhrase.includes("Script"));
console.log(newPhrase.split(" "));
console.log("30 Days Of JavaScript".split(" "));
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));
console.log("30 Days Of JavaScript".replace("JavaScript", "Python"));
console.log("30 Days Of JavaScript".charAt(15));
console.log("30 Days Of JavaScript".charCodeAt(11));
console.log("30 Days Of JavaScript".indexOf("a"));
console.log("30 Days Of JavaScript".lastIndexOf("a"));

console.log(phrase.indexOf("because"));
console.log(phrase.lastIndexOf("because"));
console.log(phrase.search("because"));

console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));

console.log(challenge.match('a'));
console.log((phrase.match(/because/s)).length);
console.log("30 Days Of ".concat("JavaScript"));
console.log("30 Days Of JavaScript".repeat(2));

console.log("Love is the best thing in this world. Some found their love and some are \
still looking for their love.".match("love"));

let text = 'He earns 5000 euro from salary per month, 10000 euro annual \
 bonus, 15000 euro online courses per month.'
 // Calculate the income from the text.
let salary = parseInt(text.substr(9, 13));
let bonus = parseInt(text.substr(42, 47));
let moneyFromCourses = parseInt(text.substr(69, 74));
console.log(salary, bonus, moneyFromCourses);

let annualIncome = salary * 12 + bonus + moneyFromCourses * 12;
console.log(annualIncome);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. \
There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering \
peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. \
%Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript \
&is also $the $result of &love& of tea&ching'

// Clean sentence and find most frequent word
let cleanSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, "");
console.log(cleanSentence);
let words = cleanSentence.split(" ");
console.log((cleanSentence.match(/I/g)).length);
console.log((cleanSentence.match(/as/g)).length);
console.log((cleanSentence.match(/a/g)).length);
console.log((cleanSentence.match(/is/g)).length);
console.log((cleanSentence.match(/the/g)).length);

// a is the most frequent word.

// Data types Part
let firstName = "Winnie";
let lastName = "Lam";
let country = "Canada";
let city = "Somewhere";
let age = 60;
let isMarried = undefined;

console.log(`firstName: ${firstName} type: ${typeof(firstName)}`);
console.log(`lastName: ${lastName} type: ${typeof(lastName)}`);
console.log(`country: ${country} type: ${typeof(country)}`);
console.log(`city: ${city} type: ${typeof(city)}`);
console.log(`age: ${age} type: ${typeof(age)}`);
console.log(`isMarried: ${isMarried} type: ${typeof(isMarried)}`);

// Arithmetic Operators Part
let operandOne = 4;
let operandTwo = 3;
console.log(operandOne + operandTwo);
console.log(operandOne - operandTwo);
console.log(operandOne * operandTwo);
console.log(operandOne / operandTwo);
console.log(operandOne % operandTwo);
console.log(operandOne ** operandTwo);
console.log(operandOne++);
console.log(operandTwo--);

// Booleans Part
// True statements
1 == 1;
1 === 1;
4 % 2 == 0;
// False statements
1 == 0;
"hello" == "blah";
1 != 1;

// Comparison Operators
/**
*
*  1)  4 > 3     true
*  2)  4 >= 3    true
*  3)  4 < 3     false
*  4)  4 <= 3    false
*  5)  4 == 4    true
*  6)  4 === 4   true
*  7)  4 != 4    false
*  8)  4 !== 4   false
*  9)  4 != '4'  true
*  10)  4 == '4'   true
*  11)  4 === '4'  false
*
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
console.log("------");

// Logical Operators
/**
*
*  1)  4 > 3 && 10 < 12   true
*  2)  4 > 3 && 10 > 12   false
*  3)  4 > 3 || 10 < 12   true
*  4)  4 > 3 || 10 > 12   true
*  5)  !(4 > 3)    false
*  6)  !(4 < 3)    true
*  7)  !(false)    true
*  8)  !(4 > 3 && 10 < 12)   false
*  9)  !(4 > 3 && 10 > 12)   true
*  10)  !(4 === '4')    true
*
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
