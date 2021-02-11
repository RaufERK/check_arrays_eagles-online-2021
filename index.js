const filterByAge = (el) => el.age < 50;

const filterByScore = (el) => el.score >= 75;

const filterByServiceRecord = (el) => el.serviceRecord >= 5;

const sortByScore = (param) => param.concat().sort((a, b) => (b.score - a.score));

function getMeanAge(candidates) {
  const arr = [];
  candidates.forEach((el) => arr.push(el.age));
  return (arr.reduce((a, b) => a + b)) / arr.length;
}

const getNamesOnly = (el) => el.name;

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
