console.log(countries)
alert('Open the console and check if the countries has been loaded')
// Exercise 9
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

// Question 1
// forEach - iterates an array elements with a callback function with elements,
// index, parameter, and arry.
// map - iterates an array elements and modify them
// filter - filters out items with conditions
// reduce - uses a callback funtion to return a single value

// Question 2
let product = 1;

// Example of using forEach
numbers.forEach(num => product *= num);
console.log(product);

// Example of using map
console.log(numbers.map(num => num ** 3));

// Example of using filter
console.log(numbers.filter(num => num % 2 == 0));

// Example of using reduce
console.log(numbers.reduce((accum, curr) => accum * curr ));

// Question 3
countries.forEach(country => console.log(country));

// Question 4
countries.forEach(country => console.log(country["name"]));

// Question 5
numbers.forEach(num => console.log(num));

// Question 6
let upperCaseCountries = countries.map(country => country["name"].toUpperCase());
console.log(upperCaseCountries);

// Question 7
let countriesLengths = countries.map(country => country["name"].length);
console.log(countriesLengths);

// Question 8
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// Question 9
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

// Question 10
// map the products array to its corresponding prices.
let productsMap = products.map(product => product["price"]);
console.log(productsMap);

// Question 11
let landCountries = countries.filter(country => country["name"].includes("land"));
console.log(landCountries);

// Question 12
let sixLetterCountries = countries.filter(country => country["name"].length == 6);
console.log(sixLetterCountries);

// Question 13
let moreThanSixLetterCountries = countries.filter(country => country["name"].length >= 6);
console.log(moreThanSixLetterCountries);

// Question 14
let eCountries = countries.filter(country => country["name"].substring(0, 1) == "E");
console.log(eCountries);

// Question 15
let productsWithPrices = products.filter(product => typeof product["price"] == "number");
console.log(productsWithPrices);

// Question 16
// Get the total price of the products
let totalPrice = products.filter(product => typeof product["price"] == "number").map(product => product["price"]).reduce((accum, curr) => accum + curr);

console.log(totalPrice);

// Question 17
// Find the sum of price of products using only reduce reduce(callback))
// is there a way to do this with 1 reduce statement?

// Question 18
// takes an array as a parameter and then returns an array only with string items.
function getStringLists(list){
  return list.filter(elem => typeof elem == "string");
}

// Question 19
let sumNumbers = numbers.reduce((accum, cur) => accum + cur);
console.log(sumNumbers);

// Question 20
// From exercise
const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
let sentence = countries1.slice(0, countries1.length - 1).reduce((accum, cur) => accum + ", " + cur);
sentence += " and " + countries1[countries1.length - 1] + " are north European countries";
console.log(sentence);

// Question 21
// some - returns true if one of the elements satisfy the condition. Otherwise false.
// every - returns true if all of the elements satisfy the conditios. Otherwise false.

// Question 22
console.log(numbers.some(num => num >= 7));

// Question 23
console.log(countries1.every(country => country.includes("land")));

// Question 24
// find - returns the first element that satisfies the condition
// findIndex - returns the position of the first position that satisfies the condition

// Question 25
console.log(countries1.find(country => country.length == 6));

// Question 26
console.log(countries1.findIndex(country => country.length ==6));
