// Exercise 19
// Level 1
// Question 1
// Create a closure which has one inner function
function outerFunction1(){
  let total = 0;
  function innerFunction1(){
    total = total * 10;
    return total;
  }
  return innerFunction1;
}

const innerFuncs1 = outerFunction1()
console.log(innerFuncs1());

// Level 2
// Question 1
// Create a closure which has three inner functions
function outerFunction2(){
  let total = 0;
  function innerFunction1(){
    total = total * 10;
    return total;
  }
  function innerFunction2(){
    total = total + 10;
    return total;
  }
  function innerFunction3(){
    total = total - 10;
    return total;
  }
  return {
      innerFunction1: innerFunction1(),
      innerFunction2: innerFunction2(),
      innerFunction3: innerFunction3()
      }
}

const innerFuncs2 = outerFunction2();
console.log(innerFuncs2.innerFunction1);
console.log(innerFuncs2.innerFunction2);
console.log(innerFuncs2.innerFunction3);

// Level 3
// Question 1
// Create a personAccount out function. It has firstname, lastname,
// incomes, expenses inner variables. It has totalIncome, totalExpense,
// accountInfo,addIncome, addExpense and accountBalance inner functions.
// Incomes is a set of incomes and its description and expenses is also a
// set of expenses and its description.
// Javascript doesn't have a set of tuples. Going to represent incomes and
// expenses as object
function personAccount(amount, description){
  let firstName = "Tom";
  let lastName = "Chan";
  let incomes = {
    amounts: [50000, 100],
    descriptions: ["salary", "lottery"]
  }
  let expenses = {
    amounts: [10000, 5000],
    descriptions: ["rent", "food"]
  }

  // inner functions
  function totalIncome(){
    let sum = 0;
    for (let i = 0; i < incomes["amounts"].length; i++){
      sum += incomes["amounts"][i];
    }
    return sum;
  }

  function totalExpense(){
    let sum = 0;
    for (let i = 0; i < expenses["amounts"].length; i++){
      sum += expenses["amounts"][i];
    }
    return sum;

  }

  function accountInfo(){
    let info = `${firstName} ${lastName} incomes: `;
    for(let i = 0; i < incomes["amounts"].length; i++){
      info += `${incomes["descriptions"][i]} ${incomes["amounts"][i]} `;
    }
    info += `expenses: `;
    for(let i = 0; i < expenses["amounts"].length; i++){
      info += `${expenses["descriptions"][i]} ${expenses["amounts"][i]} `;
    }
    return info;
  }

  function addIncome(amount, description){
    incomes["amounts"].push(amount);
    incomes["descriptions"].push(description);
    return incomes;
  }

  function addExpense(amount, description){
    expenses["amounts"].push(amount);
    expenses["descriptions"].push(description);
    return expenses;
  }

  function accountBalance(){
    return totalIncome() - totalExpense();
  }

  return {
    totalIncome: totalIncome(),
    totalExpense: totalExpense(),
    accountInfo: accountInfo(),
    addIncome: addIncome(amount, description),
    addExpense: addExpense(amount, description),
    accountBalance: accountBalance()
  }
}

const innerFunsPersonAccount = personAccount(100, "charity");
console.log(innerFunsPersonAccount.totalIncome);
console.log(innerFunsPersonAccount.totalExpense);
console.log(innerFunsPersonAccount.accountInfo);
console.log(innerFunsPersonAccount.addIncome);
console.log(innerFunsPersonAccount.addExpense);
console.log(innerFunsPersonAccount.accountBalance);
