console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 13
// Level 1
// Question 1
// Display the countries array as a table
const countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries1);

// Question 2
// Display the countries object as a table
// Assuming this refers to the countries in the data folder
console.table(countries);

// Question 3
// Use console.group() to group logs
const numbers = [1, 2, 3, 4, 5, 6];
console.group("Numbers");
console.log(numbers);
console.groupEnd();

// Level 2
// Question 1
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is not greater than 2 times 10");

// Question 2
// Write a warning message using console.warn()
console.warn("This is a warning message");

// Question 3
//Write an error message using console.error()
console.error("This is an error message.");

// Level 3
// Check the speed difference among the following loops: while, for, for of, forEach

console.time('while loop')
let i = 0;
while (i < countries.length){
  console.log(countries[i]["name"], countries[i]["capital"]);
  i++;
}
console.timeEnd('while loop');

console.time('Regular for loop');
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]["name"], countries[i]["capital"]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for (const {name, capital, languages, population, flag, currency} of countries) {
  console.log(name, capital);
}
console.timeEnd('for of loop');

console.time('forEach loop');
countries.forEach(country => {
  console.log(country["name"], country["capital"]);
})
console.timeEnd('forEach loop');
