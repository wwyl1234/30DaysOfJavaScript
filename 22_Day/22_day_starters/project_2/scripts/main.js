console.log(countries)

// Modify the class countries-wrapper
let wrapper = document.getElementsByClassName('countries-wrapper')[0];
// wrapper.style.justifyContent = 'center';
wrapper.style.display = 'flex';
wrapper.style.flexFlow = 'row wrap';
wrapper.style.maxWidth = '700px';
//wrapper.style.alignItems = 'center';
document.body.appendChild(wrapper);

// Make a div element for each country
for (const country of countries){
  let box = document.createElement('div');
  box.style.width = '100px';
  box.style.height = '100px';
  box.style.fontSize = '10px';
  box.style.color = 'black';
  box.style.border = '0.5px solid grey';
  box.style.borderRadius = '5%';
  box.style.display = 'flex';
  box.style.margin = '1px 1px 1px 1px';
  box.style.justifyContent = 'center';
  box.style.alignItems = 'center';
  box["textContent"] = `${country}`;
  wrapper.appendChild(box);
}
