console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 8
// Question 1
let dog = {};
// Question 2
console.log(dog);

// Question 3
dog["name"] = "Terry"
dog["legs"] = 4
dog["color"] = "Orange"
dog["age"] = 5
dog["bark"] = function(){
    return "woof woof";
}

console.log(dog);

// Question 4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());

// Question 5
dog["breed"] = "pug";
dog["getDogInfo"] = function(){
  return `${this.name}, ${this.legs}, ${this.color}, ${this.age}, ${this.bark()}, ${this.breed}`;
}

console.log(dog.getDogInfo());

// Question 6
let personAccount = {
  firstName: "Bailey",
  lastName: "Chan",
  incomes: [20, 100, 50000],
  expenses: [10000, 10000],
  totalIncome: function(){
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++){
      sum += this.incomes[i];
    }
    return sum;
  },
  totalExpense: function(){
    let sum = 0;
    for (let i = 0; i < this.expenses.length; i++){
      sum += this.expenses[i];
    }
    return sum;
  },
  accountInfo: function(){
    return `${this.firstName} ${this.lastName} ${this.incomes} ${this.expenses}`
  },
  addIncome: function(income){
    this.incomes.push(income);
  },
  addExpense: function(expense){
    this.expenses.push(expense);
  },
  accountBalance: function(){
    return this.totalIncome() - this.totalExpense();
  }
}

console.log(personAccount.accountInfo());
console.log(personAccount.totalIncome());
console.log(personAccount.accountBalance());

// Question 7
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let count = 0;
const keys = Object.keys(users)
for (let i = 0; i < keys.length; i++){
  let user = keys[i];
  let userCount = users[user]["points"];
  if (userCount >= 50) {
    count += userCount;
  }
}
console.log(count);

// Question 8
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// Find people in users that are MERN stack
function findMernUser() {

  let mernUsers = [];
  for (let i = 0; i < keys.length; i++){
    let user = keys[i];
    let userSkills = users[user]["skills"];
    if (isMernStack(userSkills)) {
      mernUsers.push(user);
    }
  }
  return mernUsers;
}

// Determine if the array is has all elments of MernStack
function isMernStack(stack){
  for (let i = 0; i < mernStack.length; i++){
    let mernElem = mernStack[i];
    if (!stack.includes(mernElem)){
      return false;
    }
  }
  return true;
}

console.log(findMernUser());

// Question 9
users["Winnie"] = {};

// Question 10
console.log(Object.keys(users));

// Question 11
console.log(Object.values(users));

// Question 12
console.log(countries[0]["name"], countries[0]["capital"], countries[0]["population"], countries[0]["languages"]);
