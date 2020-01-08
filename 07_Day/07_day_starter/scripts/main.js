console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 7
// Question 1
// To avoid name collision, going to use fullName1
// Prints my name
function fullName1(){
  console.log("Winnie Lam");
}
fullName1();


// Question 2
// Prints full name, given firstName and lastName
function fullName(firstName, lastName){
  return `${firstName} ${lastName}`;
}
console.log(fullName("Linda", "Lin"));

// Question 3
// Returns the sum of the given num1, num2
function addNumbers(num1, num2){
  return num1 + num2;
}
console.log(addNumbers(2, 3));

// Question 4
// Returns area of rectangle, given length and width
function areaOfRectangle(length, width){
  return length * width;
}
console.log(areaOfRectangle(2, 3));

// Question 5
// Returns perimeter of rectangle, given length and width
function perimeterOfRectangle(length, width){
  return 2 * (length + width);
}
console.log(perimeterOfRectangle(10, 20));

// Question 6
// Returns volume of rectangular prism, given length, width and height
function volumeOfRectPrism(length, width, height){
  return length * width * height;
}
console.log(volumeOfRectPrism(2, 3, 4));

// Question 7
// Returns area of circle, given radius
function areaOfCircle(radius){
  return Math.PI * (radius ** 2);
}
console.log(areaOfCircle(2));

// Question 8
// Returns circumference of circle, given radius
function circumOfCircle(radius){
  return 2 * Math.PI * radius;
}
console.log(circumOfCircle(10));

// Question 9
// Returns density of substance, given mass and volume
function density(mass, volume){
  return mass / volume;
}
console.log(density(10, 0.5));

// Question 10
// Returns the speed, given distance and time
function speed(distance, time){
  return distance / time;
}
console.log(speed(100, 10));

// Question 11
// Returns the weight of a substance, given mass and gravity
const weight = (mass, gravity) => {
  return mass * gravity;
}
console.log(weight(10, 9.8));

// Question 12
// Converts Celcius to Fahrenheit, given the degree
const convertCelciusToFahrenheit = (degree) => {
  return (degree * 9.0/5.0) + 32;
}

console.log(convertCelciusToFahrenheit(0));

// Question 13
// Determine the bmi given weight aand height.
// Return the bmi Category in string
function bMI(weight, height){
  let bmi = weight / (height ** 2);

  if (bmi < 18.5){
    return "Underweight";
  } else if (18.5 <= bmi && bmi < 24.9){
    return "Normal weight";
  } else if (25 <= bmi && bmi < 29.9){
    return "Overweight";
  } else {
      return "Obese";
  }

}

console.log(bMI(68, 1.5));
