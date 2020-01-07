console.log(countries)
alert('Open the browser console whenever you work on JavaScript')
alert('Open the console and check if the countries has been loaded')


// Exercise 5
// Question 1
let emptyArray = [];

// Question 2
let severalElemArray = new Array(6);

// Question 3
let lenSeveralElemArray = severalElemArray.length;

// Question 4
let firstItem = severalElemArray[0];
let midItem = severalElemArray[Math.floor(severalElemArray.length/2)];
let lastItem = severalElemArray[severalElemArray.length - 1];

// Question 5
let mixedDataTypes = [10, "0", true, undefined, [], false];
let lenMixedDataTpes = mixedDataTypes.length;

// Question 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Question 7
console.log(itCompanies);

// Question 8
console.log(`Number of companies: ${itCompanies.length}`);

// Question 9
console.log(`First company:${itCompanies[0]}.`);
console.log(`Middle company:${itCompanies[Math.floor(itCompanies.length/2)]}.`);
console.log(`Last company:${itCompanies[itCompanies.length - 1]}.`);

// Question 10
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// Question 11
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(itCompanies[i]);
}

// Question 12
console.log(`${(itCompanies.slice(0, itCompanies - 1)).join(',')} and ${itCompanies[itCompanies.length - 1]}.`);

// Question 13
let company = prompt("Enter a company:");
if (itCompanies.includes(company)){
  console.log(company);
} else {
  console.log(`Company not found.`);
}

// Question 14
// Undo changes in Question 11
itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let itCompany = itCompanies[i];
  if (itCompany.match(/oo/g)){
    filteredCompanies.push(itCompany);
  }
}

console.log(filteredCompanies);

// Question 15
itCompanies.sort()
console.log(itCompanies);

// Question 16
itCompanies.reverse();
console.log(itCompanies);

// Question 17
console.log(itCompanies.slice(0, 3));

// Question 18
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// Question 19
let midIndex = Math.floor(itCompanies.length / 2);
let secondArray = itCompanies.slice(midIndex + 1);
console.log(itCompanies.slice(0, midIndex).push(...secondArray));

// Question 20
itCompanies.shift();
console.log(itCompanies);

// Question 21
itCompanies.splice(midIndex, midIndex + 1);
console.log(itCompanies);

// Question 22
itCompanies.splice(itCompanies.length - 1);
console.log(itCompanies);

// Question 23
itCompanies.splice();
console.log(itCompanies);

// Question 25
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(" ");
console.log(words);
console.log(words.length);

// Question 26
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
shoppingCart.push("sugar");
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// Question 27
if (countries.includes('Ethiopia')){
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

console.log(countries);

// Question 28
if (webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// Question 29
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.push(...backEnd);
console.log(fullStack);

// Question 30
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
let min = ages[0];
let max = ages[ages.length - 1];
let median = ages[Math.floor(ages.length / 2)];
let average = ages.reduce((a, b) => a + b, 0) / ages.length;
let range = max - min;
let difference1 = Math.abs(min - average);
let difference2 = Math.abs(max - average);
console.log(difference1, difference2);

// Question 31
// Slice the first ten countries
console.log(countries.slice(0, 10));

// Question 32
// Find the middle countries
console.log(countries[Math.floor(countries.length / 2)]);

// Question 33
let firstHalf = [];
let secondHalf = [];
midCountriesIndex = Math.floor(countries.length / 2);
if (countries.length % 2 == 0){
  firstHalf = countries.slice(0, midCountriesIndex);
  secondHalf = countries.slice(midCountriesIndex);
} else {
  firstHalf = countries.slice(0, midCountriesIndex + 1);
  secondHalf = countries.slice(midCountriesIndex + 1);
}
console.log(firstHalf, secondHalf);
