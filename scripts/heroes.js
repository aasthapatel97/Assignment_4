//Grab a reference to the header tag in the HTML file
const header = document.querySelector('header');

//Grab a reference to the section tag in the HTML file
const section = document.querySelector('section');

// Get the URL for the JSON file
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    
// Create a request object
let request = new XMLHttpRequest();
    
// Set the request to GET that data from the URL
request.open('GET', requestURL);
    
// Tell the request that we want it back in JSON format (not a text string, but a JSON Object)
request.responseType = 'json';
    
// Send the request
request.send();
    
//Since we do not know when the request will complete, we will wait for it.
// When the request returns (or 'loads') we will continue processing the request
    
request.onload = function() {
  // Store the JSON object in superHeroes
  const superHeroes = request.response;
      
  // Pass superHeroes to a function to parse the header
  populateHeader(superHeroes);
      
  // Pass superHeroes to a function to parse the individual heroes
  showHeroes(superHeroes);
}
