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
  let arr = candidates.filter(el => el.age < 50);
  return arr;
}
 
function filterByScore() {
  return candidates.filter((el) => el.score >= 75);
}
function filterByServiceRecord() {
  return candidates.filter((el) => el > 5);
}
function sortByScore() {
  
}
function getMeanAge() {

}
function getNamesOnly() {

}
console.log(filterByAge());

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
