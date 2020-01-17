

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    console.log('hi')
    return skills[index]
  }
}

console.log(Person.favoriteSkill())

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    console.log(this)
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)
console.log(s2)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())

// Exercise 15
// Level 1
// Question 1
// Create an Animal class.
//The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  info (){
    // Return a string containing the properties of the animal
    return `${this.name} is ${this.age} years old, is ${this.color} and has ${this.legs} legs`;
  }
  changeColor(newColor){
    // Change color of the animal to newColor.
    this.color = newColor;
  }
  speak(){
    // Returns sound of animal in a string.
    return "";
  }
}

// Question 2
// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs = 4) {
    super(name, age, color, legs);
  }
  // Level 2
  // Question 1
  //Override the method you create in Animal class
  speak(){
    // Returns sound of dog in a string.
    return "Bark";
  }
}


class Cat extends Animal {
  constructor(name, age, color, legs = 4) {
    super(name, age, color, legs);
  }
  // Level 2
  // Question 1
  //Override the method you create in Animal class
  speak(){
    // Returns sound of cat in a string.
    return "Meow";
  }
}

let cat = new Cat("Harold", 2, "Orange");
let dog = new Dog("Barney", 1, "Black");
console.log(cat.speak());
console.log(dog.speak());
console.log(dog.info());


// Level 3
// Question 1
/* Let's try to develop a program which calculate measure of central tendency
*of a sample(mean, median, mode) and measure of variability(range, variance,
*standard deviation). In addition to those measures find the min, max, count,
*percentile, and frequency distribution of the sample. You can create a class
*called Statistics and create all the functions which do statistical
*calculations as method for the Statistics class. Check the output below.
*/

class Statistics {
  constructor(dataArray){
    this.data = dataArray;
    this.length = dataArray.length;
  }
  count(){
    // Returns the number of data points in data.
    return this.length;
  }
  sum(){
    // Returns sum of data points in data.
    let total = 0;
    for (let i = 0; i < this.length; i++){
      total += this.data[i];
    }
    return total;
  }
  min(){
    // Returns the min of data points in data.
    let min = this.data[0];
    for (let i = 1; i < this.length; i++){
      if (this.data[i] < min){
        min = this.data[i];
      }
    }
    return min;
  }
  max(){
    // Return the max of data points in data.
    let max = this.data[0];
    for (let i = 1; i < this.length; i++){
      if (this.data[i] > max){
        max = this.data[i];
      }
    }
    return max;
  }
  range(){
    // Return the range of the data points in data.
    return this.max() - this.min();
  }
  mean(){
    // Returns the mean of the data points in data.
    return this.sum() / this.count();
  }
  median(){
    // Returns the median of the data points in data.
    let sorted = this.data.slice().sort();
    return sorted[Math.floor(sorted.length/2)];
  }
  mode(){
    // Returns the mode of the data points in data.
    let modeValue = 0;
    let modeKey = undefined;
    let freqDist = this.freqDist();
    for (let key in freqDist){
      let value = freqDist[key];
      if (value > modeValue){
        modeValue = value;
        modeKey = key;
      }
    }
    console.log(modeValue);
    modeValue = Math.floor(modeValue / 100 * this.count());
    let result = {};
    result[modeKey] = modeValue;
    return result;
  }
  var(){
    // Returns the variance of the data points in data.
    let result = 0;
    for (let i = 0; i < this.length; i++){
      let data = this.data[i];
      result += (data - this.mean()) ** 2;
    }
    return result / this.length;
  }
  std(){
    // Returns the standard deviation of data points in data.
    return Math.sqrt(this.var());
  }
  freqDist(){
    // Returns the frequency distribution of data points in data.
    let countDist = {};
    for (let i = 0; i < this.length; i++){
      let data = this.data[i];
      if (countDist.hasOwnProperty(data)){
        countDist[data] = countDist[data] + 1;
      } else {
        countDist[data] = 1;
      }
    }
    console.log(countDist);
    let freqDist = {};
    let total = this.count();
    for (let key in countDist){
      let value = countDist[key];
      let newValue = value / total * 100;
      freqDist[key] = newValue;

    }
    return freqDist;

  }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = new Statistics(ages);
console.log(statistics.data)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
