// Excercise 21
// Level 1
// Question 1
// Create an index.html file and put four p elements as above:
// Get the first paragraph by using document.querySelector(tagname) and tag name
let para1 = document.querySelector('p');
console.log(para1);

// Question 2
// Get get each of the the paragraph using document.querySelector('#id') and by their id
para1 = document.querySelector('#first-para');
let para2 = document.querySelector('#second-para');
let para3 = document.querySelector('#third-para');
let para4 = document.querySelector('#fourth-para');
console.log(para1, para2, para3, para4);

// Question 3
// Get all the p as nodeList using document.querySelectorAll(tagname)
// and by their tag name
let paras = document.querySelectorAll('p');
console.log(paras);

// Question 4
// Loop through the nodeList and get the text content of each paragraph
for (const node of paras){
  console.log(node.textContent);
}

// Question 5
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
paras[3]['textContent'] = 'Fourth paragraph';
console.log(paras[3]);

// Question 6
// Set id and class attribute for all the paragraphs using different attribute setting methods
paras[3].className = 'ending';
paras[3].id = 'ending-para';

paras[0].setAttribute('class', 'first');
paras[0].setAttribute('id', 'beginning-para');

// add 2 classes each for the second and third paragraphs
paras[1].classList.add('class', 'second');
paras[2].classList.add('class', 'third');
paras[1].setAttribute('id', 'para2');
paras[2].setAttribute('id', 'para3');

console.log(paras);

// Level 2
// Question 1
// Change style of each paragraph using JavaScript(eg. color, background,
// border, font-size, font-family)
for (const node of paras){
  node.style.color = 'red';
  node.style.backgroundColor = 'green';
  node.style.border = '10px solid grey';
  node.style.fontSize = '20px';
  node.style.fontFamily = 'arial';
}

console.log(paras);

// Question 2
// Select all paragraphs and loop through each elements and give the first
// and third paragraph a color of green, and the second and the
// fourth paragraph a red color
for (let i = 0; i < paras.length; i++){
  if (i % 2 == 0){
    // make paragraph green
    paras[i].style.color = 'green';
  } else {
    // make paragraph red
    paras[i].style.color = 'red';

  }
}
console.log(paras);

// Question 3
// Set text content, id and class to each paragraph
for (let i = 0; i < paras.length; i++){
  paras[i].textContent = `This is paragraph number ${i}!`;
  paras[i].id = `para${i}`;
  paras[i].className = `para`;

}
console.log(paras);

// Level 3
// DOM: Mini project 1
//
//    Develop the following application, use the following HTML elements
// to get started with. You will get the same code on starter folder.
// Apply all the styles and functionality using JavaScript only.
//        The year color is changing every 1 second
//        The date and time background color is changing every on seconds
//        Completed challenge has background green
//        Ongoing challenge has background yellow
//        Coming challenges have background red
