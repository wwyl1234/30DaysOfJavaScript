




// Exercise 17
// Level 1
// Question 1
// Store you first name, last name, age, country,
// city in your browser localStorage.
localStorage.setItem("firstName", "Winnie");
localStorage.setItem("lastName", "Lam");
localStorage.setItem("age", 60);
localStorage.setItem("country", "Somewhere");

console.log(localStorage);

// Level 2
// Question 1
// Create a student object. The student object will have first name,
// last name, age, skills, country, enrolled keys and values for the
// keys. Store the student object in your browser localStorage.
let student = {
  firstName: "Harold",
  lastName : "Lin",
  age : 18,
  skills: [
    "HTML"
  ],
  country: "USA",
  enrolled:  {
    ENGA01 : "MWF3",
    MATA01 : "TTh4-6",
  }
}

localStorage.setItem("student", JSON.stringify(student, undefined, 4));
console.log(localStorage);


// Level 3
// Question 1
// Create an object called personAccount. It has firstname, lastname,
// incomes, expenses properties and it has totalIncome, totalExpense,
// accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is also
//  a set of expenses and its description.


let personAccount = {
  firstName: "Cathy",
  lastName: "Chan",
  incomes: {
    personal: 1000,
    salary: 40000
  },
  expenses: {
    car: 1000,
    food: 5000,
    rent: 10000
  },
   totalIncome(){
     // Returns the total amount of incomes.
     let sum = 0;
     let keys = Object.keys(this.incomes);
     for (let i = 0; i < keys.length; i++){
       sum += this.incomes[keys[i]];
     }
     return sum;
   },
   totalExpense(){
     // Returns the total amount of expenses.
     let sum = 0;
     let keys = Object.keys(this.expenses);
     for (let i = 0; i < keys.length; i++){
       sum += this.expenses[keys[i]];
     }
     return sum;
   },
   accountInfo(){
     // Returns the account info as a string.
     return `${this.firstName} ${this.lastName} has incomes of ${this.incomes} and expenses of ${this.expenses}`
   },
   addIncome(item, value){
     // Add income represented as item a string describing the income, value a number
     this.incomes[item] = value;
   },
   addExpense(item, value){
     // Add expense represented as item a string describing the income, value a number
     this.expenses[item] = value;
   },
   accountBalance(){
     // Returns the account balance of the person.
     return this.totalIncome() - this.totalExpense();
   }
}

localStorage.setItem("personAccount", JSON.stringify(personAccount, undefined, 4));
console.log(localStorage);
