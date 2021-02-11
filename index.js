candidates = [
  {
    name: "Василий Петров",
    age: 60,
    score: 98,
    serviceRecord: 36,
  },
  {
    name: "Екатерина Фёдорова",
    age: 35,
    score: 90,
    serviceRecord: 7,
  },
  {
    name: "Иван Иванов",
    age: 29,
    score: 67,
    serviceRecord: 2,
  },
  {
    name: "Зинаида Абрамова",
    age: 45,
    score: 78,
    serviceRecord: 14,
  },
  {
    name: "Виктор Олегов",
    age: 54,
    score: 85,
    serviceRecord: 21,
  },
];

const filterByAge = (el) => el.age < 50;

const filterByScore = (el) => el.score > 75;

const filterByServiceRecord = (el) => el.serviceRecord > 5;

const sortByScore = (candidates) =>
  [...candidates].sort((a, b) => b.score - a.score);

const getMeanAge = (el) =>
  el.reduce((acc, cur) => acc + cur.age, 0) / el.length;

const getNamesOnly = (el) => el.name;

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
