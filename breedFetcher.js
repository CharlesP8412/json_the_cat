/* 
API
//   https://api.thecatapi.com/v1/images/search
Search Query 
// https://api.thecatapi.com/v1/breeds/search?q=sib



 */
const request = require('request');

// Take user input w. process ARGV
const argInput = process.argv.splice(2);
// Parse out Input, URL & filePath
const breedToFind = argInput[0];

//Request the siberian data 

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToFind.toLowerCase()}`, (error, response, body) => {
  //Converts Dl'd Body STRING into an Object (array w. object)
  if (error) {
    throw new Error(error);
  }
  const data = JSON.parse(body);
  // Print Dl'd desc. of the breed
  console.log(data[0].description);
});

