// Conditionals

// Question 1
let age = prompt("Enter your age:");
if (age >= 18){
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}

// Question 2
let myAge = 25;
let yourAge = prompt("Enter you age:");
if (yourAge >= myAge){
  console.log(`You are ${yourAge - myAge} older than me.`);
} else {
  console.log(`You are ${myAge - yourAge} younger than me.`);
}

// Question 3
let a = 4;
let b = 3;

if (a >= b){
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is not greater than ${b}`);
}

// Do the same thing with ternary operator
a >= b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is not greater than ${b}`);

// Question 4
let score = parseInt(prompt("Enter your score."));
var grade;

switch (true){
  case (80 <= score && score <= 100):
    grade = "A";
    break;
  case (70 <= score && score <= 79):
    grade = "B";
    break;
  case (60 <= score && score <= 69):
    grade = "C";
    break;
  case (50 <= score && score <= 59):
    grade = "D";
    break;
  case (0 <= score && score <= 49):
    grade = "F";
    break;
  default:
    console.log("Please put a score of a value between 0 and 100.");
}

console.log(score, grade);

// Question 5
let month = prompt("Enter a month");
var season;
switch (true){
  case (month == "September" || month == "October" || month == "November"):
    season = "Fall";
    break;
  case (month == "December" || month == "January" || month == "Februry"):
    season = "Winter";
    break;
  case (month == "March" || month == "April" || month == "May"):
    season = "Spring";
    break;
  case (month == "June" || month == "July" || month == "August"):
    season = "Summer";
    break;
  default:
    console.log("Please put a month");
}

console.log(month, season);

// Question 6
let number = prompt("Enter a number");
number % 2 == 0
 ? console.log(`${number} is an even number.`)
 : console.log(`${number} is an odd number.`);

// Question 7
let day = prompt("What day is today?");
let formattedDay = "";
formattedDay += day[0].toUpperCase();
formattedDay += (day.substring(1)).toLowerCase();
switch(true){
  case (formattedDay == "Monday" || formattedDay == "Tuesday" ||
   formattedDay == "Wednesday" || formattedDay == "Thursday" ||
   formattedDay == "Friday"):
   console.log(`${formattedDay} is a working day.`);
   break;
  case (formattedDay == "Saturday" || formattedDay == "Sunday"):
   console.log(`${formattedDay} is a weekend day.`);
   break;
  default:
   console.log(`Please enter a day.`);

}

// Question 8
let yourMonth = prompt("Enter a month:");
let formattedMonth = "";
formattedMonth += yourMonth[0].toUpperCase();
formattedMonth += (yourMonth.substring(1)).toLowerCase();

switch(true){
  case (formattedMonth == "January" || formattedMonth == "March" ||
    formattedMonth == "May" || formattedMonth == "July" ||
    formattedMonth == "August" || formattedMonth == "October" ||
    formattedMonth == "December"):
   console.log(`${formattedMonth} has 31 days.`);
   break;
  case (formattedMonth == "February"):
   console.log(`${formattedMonth} has 28 or 29 days.`);
   break;
  case (formattedMonth == "April" || formattedMonth == "June" ||
   formattedMonth == "September" || formattedMonth == "November"):
   console.log(`${formattedMonth} has 30 days.`);
   break;
  default:
   console.log(`Please enter a month.`);
}
console.log(yourMonth, formattedMonth);
