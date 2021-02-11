const filterByAge = (el) => el.age < 50;
const filterByScore = (el) => el.score > 75;
const filterByServiceRecord = (el) => el.serviceRecord > 5;
const sortByScore = (candidates) => candidates.sort(candidates.score);
const getMeanAge = (candidates) => {
  let midAge = candidates.reduce((acc, item)) => {
    return acc + item;
  }
};
const getNamesOnly = () => {};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
