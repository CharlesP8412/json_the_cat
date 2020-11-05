/* 
API
//   https://api.thecatapi.com/v1/images/search
Search Query 
// https://api.thecatapi.com/v1/breeds/search?q=sib



 */
const request = require('request');


//Request the siberian data 

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description)
  console.log(typeof data)
});

