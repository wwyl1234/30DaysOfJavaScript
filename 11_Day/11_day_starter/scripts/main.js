<<<<<<< HEAD
// Exercise 11
// Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Question 1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi , gravity, humanBodyTemp, waterBoilingTemp);

// Question 2
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Question 3
const {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

// Level 2
// Question 1
for (const {name, scores, skills, age} of users){
  console.log(name, scores, skills, age);
}

// Question 2
// find people that have less than 2 skills
let peopleWithLessThanTwoSkills = [];
for (const {name, scores, skills, age} of users){
  if (skills.length < 2) {
    peopleWithLessThanTwoSkills.push(name);
  }
}
console.log(peopleWithLessThanTwoSkills);

// Level 3
// Question 1
for (const {name, capital, languages, population, flag, currency} of theCountries){
  console.log(name, capital, population, languages);
}

// Question 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, scores] = student;
const [htmScore, cssScore, jsScore, reactScore] = scores;
console.log(name, skills, scores, jsScore, reactScore)

// Question 3
const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ];

// Change students array to an object
function convertArrayToObject(students){
  let studentsObj = [];
  for (const [name, skills, scores] of students){
    let student = {"name": name, "skills": skills, "scores": scores};
    studentsObj.push(student);
  }
  return studentsObj;
}

console.log(convertArrayToObject(students))

// Question 4
const student1 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

let newStudent = {...student1};

//  Add Bootstrap with level 8 to the front end skill sets
newStudent["skills"]["frontEnd"].push({"skill": "Bootstrap", "level": 8});
//  Add Express with level 9 to the back end skill sets
newStudent["skills"]["backEnd"].push({"skill": "Express", "level": 9});
//  Add SQL with level 8 to the data base skill sets
newStudent["skills"]["dataBase"].push({"skill": "SQL", "level": 8});
//  Add SQL without level to the data science skill sets
newStudent["skills"]["dataScience"].push("SQL");

console.log(newStudent);
=======
console.log(countries)
alert('Open the console and check if the countries has been loaded')
>>>>>>> upstream/master
