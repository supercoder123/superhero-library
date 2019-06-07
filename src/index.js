let superHeroNames = require('./superhero.json')
let uniqueRandomArray = require('unique-random-array');

module.exports = {
  all:superHeroNames,
  random: uniqueRandomArray(superHeroNames)
};
