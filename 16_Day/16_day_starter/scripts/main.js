console.log(countries)
alert('Open the console and check if the countries has been loaded')
// Exercise 16
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const text = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Level 1
// Question 1
// Change skills array using JSON.stringify()
let skillsString = JSON.stringify(skills, undefined, 4);
console.log(skillsString);

// Question 2
// Stringify the age variable
let ageString = JSON.stringify(age, undefined, 4);
console.log(ageString);

// Question 3
// Stringify the isMarried variable
let isMarriedString = JSON.stringify(isMarried, undefined, 4);
console.log(isMarriedString);

//Question 4
// Stringify the student object
let studentString = JSON.stringify(student, undefined, 4);
console.log(studentString);

// Level 2
// Question 1
// Stringify the students object with only firstName, lastName and
// skills properties
let studentFilteredString = JSON.stringify(student, ["firstName", "lastName", "skills"], 4);
console.log(studentFilteredString);

// Level 3
// Question 1
// Parse the text JSON to object.
let textObj = JSON.parse(text);
console.log(textObj);

// Question 2
// Find the the user who has many skills.
let talentedUser = "";
let maxSkills = 0;
let keys = Object.keys(textObj);
for (let i = 0; i < keys.length; i++){
  let user = keys[i];
  let userSkills = textObj[user]["skills"].length;
  if (userSkills > maxSkills){
    talentedUser = user;
    maxSkills = userSkills;
  }
}
console.log(`The user who has many skills is ${talentedUser}`);
