console.log(countries)
alert('Open the console and check if the countries has been loaded')
// Exercise 18

const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Level 1
// Read the countries API using fetch and print the name of country,
// capital, languages, population and area.
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    for (let i = 0; i < data.length; i++){

      console.log(data[i]["name"], data[i]["capital"], data[i]["languages"], data[i]["population"], data[i]["area"]);
    }

  })
  .catch(error => console.log(error)) // handling error if something wrong happens

// Level 2
// Print out all the cat names in to catNames variable.

fetch(catsAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    for (let i = 0; i < data.length; i++){

      console.log(data[i]);
    }


  })
  .catch(error => console.log(error)) // handling error if something wrong happens

// Level 3
// Question 1
// Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    let averageWeight = 0;
    for (let i = 0; i < data.length; i++){
      let metricData = data[i]["weight"]["metric"].split("-");

      averageWeight += Number.parseInt(metricData[0]) +  Number.parseInt(metricData[1])/10;
    }
    averageWeight = averageWeight / data.length;
    console.log(`${averageWeight} kg`);

  })
  .catch(error => console.log(error)) // handling error if something wrong happens

// Question 2
// Read the countries api and find out the 10 largest countries
// Assuming largest country means by land area.
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    data.sort(function (a, b) {
      if (a["area"] == b["area"]){
        return 0;
      } else if (a["area"] < b["area"]){
        return 1;
      } else {
        return -1;
      }
    }
  );
    // Get the 10 largest countries
    console.log(`The 10 largest countries: ${data.slice(0, 10)}`);

  })
  .catch(error => console.log(error)) // handling error if something wrong happens

// Question 3
// Read the countries api and count total number of languages in
// the world used as officials.
fetch(countriesAPI)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    let totalLanguages = 0; // This include duplicates
    for (let i = 0; i < data.length; i++){
      totalLanguages += data[i]["languages"].length;
    }
    console.log(`Total languages: ${totalLanguages}`);
  })
  .catch(error => console.log(error)) // handling error if something wrong happens
