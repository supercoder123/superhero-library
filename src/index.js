const superHeroNamesList = require("./superhero.json");
const uniqueRandomArray = require("unique-random-array");

let allSuperHeroNames = superHeroNamesList.map(superhero => {
  return superhero.name;
});

let superHeroById = id => {
  let superHeroObj;
  let stringId;
  try {
    stringId = String(id);
  } catch (err) {
    console.error("Please enter a number");
  }

  if (id > 0 && id <= superHeroNamesList.length) {
    superHeroObj = superHeroNamesList.find(superhero => {
      return superhero.id === stringId;
    });
  }

  try {
    return superHeroObj.name;
  } catch (err) {
    console.error(
      "Please enter a number between 1 and " + superHeroNamesList.length
    );
  }
};

module.exports = {
  rawList: superHeroNamesList,
  allNames: allSuperHeroNames,
  random: uniqueRandomArray(allSuperHeroNames),
  getSuperHeroById: superHeroById
};
