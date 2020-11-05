const {fetchBreedDescription } = require('./breedFetcher');
// Take user input w. process ARGV
const rawBreedName = process.argv[2];
const breedName = rawBreedName.toLowerCase();


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
