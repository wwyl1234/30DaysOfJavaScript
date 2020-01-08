console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 6
// Question 1
// Iterate 0 to 10
for (let i = 0; i < 11; i++){
  console.log(i);
}

let count = 0;
while (count < 11){
  console.log(count);
  count++;
}

let l = 0;
do {
  console.log(l);
  l++;
} while (l < 11)

// Question 2
// Iterate 10 to 0
for (let i = 10; i > 0; i--){
  console.log(i);
}

let j = 10;
while (j > 0){
  console.log(j);
  j--;
}

let k = 10;
do {
  console.log(k);
  k--;
} while (k > 0)

// Question 3
let n = parseInt(prompt("Enter number:"));
for (let i = 0; i <= n; i++){
  console.log(i);
}

// Question 4
let rowNum = 7;
let row = "";
for (let i = 1; i <= rowNum; i++){
  row += "#";
  console.log(row);
}

// Question 5
for (let i = 0; i <= 10; i++){
  console.log(`${i} x ${i} = ${i * i}`);
}

// Question 6
console.log(`i   i^2   i^3`);
for (let i = 0; i <= 10; i++){
  console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}

// Question 7
for (let i = 0; i <= 100; i++){
  if (i % 2 == 0){
    console.log(i);
  }
}

// Question 8
for (let i = 0; i <= 100; i++){
  if (i % 2 == 1){
    console.log(i);
  }
}

// Question 9
// Returns true if num is a prime number otherwise false. Assuming given int.
function isPrime(num){
  let sqrtNum = Math.floor(Math.sqrt(num));
  if (num <= 1) {
    return false;
  }

  if (num == 2 || num == 3){
    return true;
  }

  // If number is divisble then it is not a prime number.
  for (let i = 2; i <= sqrtNum; i++){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

// Question 10
let sumOfAllNumbers = 0;
for (let i = 0; i <= 100; i++){
  sumOfAllNumbers += i;
}
console.log(`The sum all numbers is ${sumOfAllNumbers}.`);

// Question 11
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++){
  if (i % 2 == 0) {
    sumEven += i;
  }
  else {
    sumOdd += i;
  }
}
console.log(`The sum all evens is ${sumEven}. And the sum of all odds is ${sumOdd}.`);

// Question 12
// Going to use code from Question 11
let sumsArray = [sumEven, sumOdd];
console.log(sumsArray);

// Question 13
let randNumArray = [];
for (let i = 0; i < 5; i++){
  let randomNum = Math.floor(Math.random() * 10000);
  randNumArray.push(randomNum);
}
console.log(randNumArray);

// Question 14
let randUniqueNumArray = [];
while (randUniqueNumArray.length <= 5){
  let randomNum = Math.floor(Math.random() * 10000);
  if (!randUniqueNumArray.includes(randomNum)){
    randUniqueNumArray.push(randomNum);
  }
}
console.log(randUniqueNumArray);

// Question 15
let randId = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
for ( var i = 0; i < 6; i++ ) {
   randId += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(randId);

// Question 16
let randLength = parseInt(prompt("Enter length of random ID:"));
let randomId = '';
for ( var i = 0; i < randLength; i++ ) {
   randId += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(randomId);

// Question 17
let randHex = ''
const hexCharacters = 'abcdef0123456789';
const hexCharactersLength = hexCharacters.length;
for ( var i = 0; i < 6; i++ ) {
   randHex += hexCharacters.charAt(Math.floor(Math.random() * hexCharactersLength));
}
console.log(`#${randHex}`);

// Question 18
let red = Math.floor(Math.random() * (255 + 1));
let blue = Math.floor(Math.random() * (255 + 1));
let green = Math.floor(Math.random() * (255 + 1));
let randomColour = `rgb(${red}, ${green}, ${blue})`;

// Question 19
let capCountries = [];
for (let i = 0; i < countries.length; i++){
  capCountries.push(countries[i].toUpperCase());
}
console.log(capCountries);

// Question 20
let lenCountriesArray = [];
for (let i = 0; i < capCountries.length; i++){
  lenCountriesArray.push(capCountries[i].length);
}
console.log(lenCountriesArray);

// Question 21
let countriesArray = [];
for (let i = 0; i < countries.length; i++){
  let shortForm = capCountries[i].substring(0, 3);
  countriesArray.push([countries[i], shortForm, lenCountriesArray[i]]);
}
console.log(countriesArray);

// Question 22
let landCountries = [];
  for (let i = 0; i < countries.length; i++){
    if (countries[i].includes("land")){
      landCountries.push(countries[i]);
    }
}
if (landCountries){
  console.log(landCountries);
} else {
  console.log(`These are countries without land`);
}

// Question 23
let iaCountries = [];
for (let i = 0; i < countries.length; i++){
  let tempCountry = countries[i];
  if (tempCountry.match(/^.+ia$/g)){
    iaCountries.push(tempCountry);
  }
}
if (iaCountries){
  console.log(iaCountries);
} else {
  console.log('These are countries ends without ia');
}

// Question 24
let biggestCountry = countries[0];
for (let i = 0; i < countries.length; i++){
  if (countries[i].length > biggestCountry.length){
    biggestCountry = countries[i];
  }
}
console.log(biggestCountry);

// Question 25
let fiveLetterCountries = [];
for (let i = 0; i < countries.length; i++){
  if (countries[i].length == 5){
    fiveLetterCountries.push(countries[i]);
  }
}
console.log(fiveLetterCountries);

// Question 26
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

let longestWebTech = webTechs[0];
for(let i = 0; i < webTechs.length; i++){
  let webTech = webTechs[i];
  if (webTech.length > longestWebTech.length){
    longestWebTech = webTechs[i];
  }
}
console.log(longestWebTech);

// Question 27
let masterWebTechs = [];
for(let i = 0; i < webTechs.length; i++){
  let webTech = webTechs[i];
  masterWebTechs.push([webTech, webTech.length]);
}
console.log(masterWebTechs);

// Question 28
let mernStack = ["MongoDB", "Express", "React", "Node"];

// Question 29
for(let i = 0; i < webTechs.length; i++){
  let webTech = webTechs[i];
  console.log(webTech);
}

// Question 30
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i = 0; i < Math.floor(fruits.length / 2); i++){
  let temp = fruits[i];
  fruits[i] = fruits[fruits.length - i - 1];
  fruits[fruits.length - i - 1] = temp;
}
console.log(fruits);

// Question 31
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++ ){
  for (let inner = 0; inner < fullStack[i]; inner++) {
    let capStack = fullStack[i][inner].toUpperCase();
    console.log(capStack);
  }
}


// Question 32
let copyCountries = countries.slice();

// Question 33
// Use code fromm Question 32
let sortedCountries = copyCountries.sort();

// Question 34
webTechs.sort();
mernStack.sort();
console.log(webTechs, mernStack);

// Question 35
// done in Question 22
console.log(landCountries);

// Question 36
// done ine Question 24
console.log(biggestCountry);

// Question 37
// same as Question 35

// Question 38
let fourLetterCountries = [];
for (let i = 0; i < countries.length; i++){
  if (countries[i].length == 4){
    fourLetterCountries.push(countries[i]);
  }
}
console.log(fourLetterCountries);

// Question 39
let morethantwoWordsCountries = [];
for (let i = 0; i < countries.length; i++){
  if (countries[i].includes(" ")){
    morethantwoWordsCountries.push(countries[i]);
  }
}
console.log(morethantwoWordsCountries);

// Question 40
let reversedCountries = countries.slice();
reversedCountries.reverse();
for (let i = 0; i < countries.length; i++){
    let country = reversedCountries[i];
    reversedCountries[i] = country[0].toUpperCase() + (country.substring(1)).toLowerCase();

}
console.log(reversedCountries);
