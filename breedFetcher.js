/*
API
//   https://api.thecatapi.com/v1/images/search
Search Query
// https://api.thecatapi.com/v1/breeds/search?q=sib

 */
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  // console.log("Searching...")
  //Request the siberian data
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //Converts Dl'd Body STRING into an Object (array w. object)
    if (error) {
      // console.log("REQUEST ERROR")
      throw new Error(error);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        // Print Dl'd desc. of the breed
        // console.log("Returning data...")
        callback(null, data[0].description);
      } else {
        callback('Not Found', null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };