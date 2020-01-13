console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 12
// Level 1
// Question 1
let text1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let incomes = text1.match(/(\d+)/g);
let totalIncome = Number.parseInt(incomes[0]) * 12 +  Number.parseInt(incomes[1]) + Number.parseInt(incomes[2] * 12);
console.log(totalIncome);

// Question 2
let text2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
let points = text2.match(/(-?\d+)/g);
console.log(points);
let sortedPoints = [].concat(points.map(num => Number.parseInt(num))).sort(function (a, b){
  return a === b ? 0 : a < b ? -1 : 1;
});
console.log(sortedPoints);
let distance = Math.abs(sortedPoints[sortedPoints.length - 1] - sortedPoints[0]);
console.log(distance);


// Question 3
// Return true if string is Valid  in JS, otherwise false
function is_valid_variable(string){
  let pattern = /^[a-z]+_?[A-Z]?([a-z]+)?$/g
  return pattern.test(string);
}

console.log(is_valid_variable('first_name')); // True
console.log(is_valid_variable('first-name')); // False
console.log(is_valid_variable('1first_name')); // False
console.log(is_valid_variable('firstname')); // True

// Level 2
// Question 1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph){
  let result = [];
  let pattern = /([A-z]+)/gi;
  let words = paragraph.match(pattern);
  let uniqueWords = new Set(words);

  for (const word of uniqueWords){
    // let word = uniqueWords[i];
    let re = new RegExp(word,"g");
    let count = (paragraph.match(re)).length;
    result.push({"count" : count, "word": word});
  }
  // sort the array by count
  let sortedResult = result.slice().sort(function (a, b){
    if (a.count == b.count){
      return 0;
    }
    else if (a.count < b.count){
      return 1;
    } else {
      return -1;
    }
  });
  return sortedResult.slice(0, 10);


}

console.log(tenMostFrequentWords(paragraph))


// Level 3
// Question 1

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function cleanText(sentence){
  let pattern = /[%$@#!;&]/gi;
  return sentence.replace(pattern, "");
}

console.log(cleanText(sentence));
let cleanedText = cleanText(sentence);

// Returns the top 3 words with its count in cleaned Test.
function mostFrequentWords(cleanedText){
  let result = []
  let pattern = /([A-z]+)/gi;
  let words = cleanedText.match(pattern);
  let uniqueWords = new Set(words);

  for (const word of uniqueWords){
    let re = new RegExp(word,"g");
    let count = (cleanedText.match(re)).length;
    result.push({count, word});
  }
  // Sort the array by count
  let sortedResult = result.slice().sort(function (a, b){
    if (a.count == b.count){
      return 0;
    }
    else if (a.count < b.count){
      return 1;
    } else {
      return -1;
    }
  });
  return sortedResult.slice(0, 3);

}

console.log(mostFrequentWords(cleanedText))
