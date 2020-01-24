// Exercise 22
// Level 1
// Create a div container on HTML document and create 100 to 100 numbers
// dynamically and append to the container div.
//
//    Even numbers background is green
//    Odd numbers background is yellow
//    Prime numbers background is red

// Create the container div
let container = document.createElement('div');
container.className = 'container';
container.style.justifyContent = 'center';
container.style.display = 'flex';
container.style.flexFlow = 'row wrap';
container.style.maxWidth = '700px';
document.body.appendChild(container);

// Returns true if number is prime. Otherwise false.
function isPrime(num){
  if (num < 2){
    return false;
  }

  if (num == 2 || num == 3){
    return true;

  }
  // go through all numbers from 2 to sqrt of number
  let stopNum = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= stopNum; i++){
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}


// make the boxes from 0 to 101
for (let i = 0; i < 102; i++) {
    let number = document.createElement('div');
    number.style.width = '100px';
    number.style.height = '40px';
    number.style.fontSize = '30px';
    number.style.color = 'white';
    number.style.textAlign = 'center';

    number.style.margin = '0 10px 10px 0';
    number["textContent"] = `${i}`;
    if (i % 2 == 0){
      // even then background should be green
      number.style.backgroundColor = 'green';
    } else {
      // odd then background should be yellow
      number.style.backgroundColor = 'yellow';
    }

    // if prime then background should be red
    if (isPrime(i)){
      number.style.backgroundColor = 'red';
    }
    container.appendChild(number);
}
