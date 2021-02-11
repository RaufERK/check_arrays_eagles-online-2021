let candidates = [
  {
    name: 'Василий Петров',
    age: 60,
    score: 98,
    serviceRecord: 36,
  },
  {
    name: 'Екатерина Фёдорова',
    age: 35,
    score: 90,
    serviceRecord: 7,
  },
  {
    name: 'Иван Иванов',
    age: 29,
    score: 67,
    serviceRecord: 2,
  },
  {
    name: 'Зинаида Абрамова',
    age: 45,
    score: 78,
    serviceRecord: 14,
  },
  {
    name: 'Виктор Олегов',
    age: 54,
    score: 85,
    serviceRecord: 21,
  },
];
function filterByAge() {
  let arr = candidates.filter((el) => el.age < 50);
  return arr;
}
function filterByScore() {
  let arr = candidates.filter((el) => el.score >= 75)
  return arr;
}
function filterByServiceRecord() {
  return candidates.filter((el) => el.serviceRecord > 5);
}
function sortByScore() {
  return candidates.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    } 
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  })
}
function getMeanAge() {
  let arr = [];
  candidates.forEach((el) => arr.push(el.age));
  let mean = (arr.reduce((a, b) => a +b))/arr.length;
  return mean;
}
function getNamesOnly() {
  let arr = [];
  candidates.forEach((el) => arr.push(el.name));
  return arr;
}
console.log(filterByAge());
console.log(filterByScore());
console.log(filterByServiceRecord());
console.log(sortByScore());
console.log(getMeanAge());
console.log(getNamesOnly());

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
