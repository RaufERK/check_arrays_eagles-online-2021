const filterByAge = (el) => el.age < 50;

const filterByScore = (el) => el.score > 75;

const filterByServiceRecord = (el) => el.serviceRecord > 5;

const sortByScore = (el) => el.score;

const getMeanAge = (el) => {};

const getNamesOnly = (el) => el.name;



module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
