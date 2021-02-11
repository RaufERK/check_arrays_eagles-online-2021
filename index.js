function filterByAge(el) {
  return el.age < 50;
}

function filterByScore(el) {
  return el.score > 75;
}

function filterByServiceRecord(el) {
  return el.serviceRecord > 5;
}

function sortByScore(arr) {
  const newArr = arr.slice();
  return newArr.sort((a, b) => b.score - a.score);
}

function getMeanAge(arr) {
  return arr.reduce((sum, el) => sum + el.age, 0) / arr.length;
}

function getNamesOnly(el) {
  return el.name;
}

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
