<<<<<<< HEAD
console.log(countries);
alert('Open the console and check if the countries has been loaded');
// Exercise 10
// Question 1
let emptySet = new Set();
console.log(emptySet);

// Question 2
let numbersSet = new Set();
for (let i = 0; i <= 10; i++) {
  numbersSet.add(i);
}
console.log(numbersSet);

// Question 3
numbersSet.delete(0);
console.log(numbersSet);

// Question 4
numbersSet.clear();
console.log(numbersSet);

// Question 5
let strings = ["Blah", "Foo", "pink", "", "Hehe"];
let stringsSet = new Set(strings);
console.log(stringsSet);

// Question 6
let countriesEntries = [];
for (let i = 0; i < countries.length; i++){
  let name = countries[i]["name"];
  countriesEntries.push([name, name.length]);

}
console.log(countriesEntries);
let countriesMap = new Map(countriesEntries);
console.log(countriesMap);

// Question 7
// Find the most spoken languages with the number of countries and language
function mostSpokenLanguages(countries, num){
  // Get all the languages
  let languages = new Set();
  let languagesCountMap = new Map();
  for (let i = 0; i < countries.length; i++){
    let countryLanguages = countries[i]["languages"];
    for (let j = 0; j < countryLanguages.length; j++){
      let language = countryLanguages[j];
      if (languages.has(language)){
        // add count when language exists in languages
        let count = languagesCountMap.get(language) + 1;
        languagesCountMap.set(language, count);
      } else {
        // add entry to languages and languagesCountMap
        languages.add(language);
        languagesCountMap.set(language, 1);

      }
    }
  }
  let languageSortedMap =  new Map([...languagesCountMap].sort((a, b) => a[1] < b[1] ? 1 : -1));


  // format the result as desired
  let formattedArray = [];
  let count = 0;
  for (const [language, languageCount] of languageSortedMap) {
      if (count < num){
        formattedArray.push([languageCount, language]);
      }
      count++;
  }

  return formattedArray;

}

console.log(mostSpokenLanguages(countries, 10));

console.log(mostSpokenLanguages(countries, 3));
=======
console.log(countries)
alert('Open the console and check if the countries has been loaded')
>>>>>>> upstream/master
