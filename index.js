const filterByAge = (person) => person.age < 50;

const filterByScore = (person) => person.score > 75;

const filterByServiceRecord = (person) => person.serviceRecord > 5;

const sortByScore = (arr) => arr.slice().sort((a, b) => b.score - a.score);

const getMeanAge = (arr) => arr.reduce((acc, person) => acc + person.age, 0) / arr.length;

const getNamesOnly = (person) => person.name;

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
