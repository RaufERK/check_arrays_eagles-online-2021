const filterByAge = (candidate) => {
  return candidate.age < 50;
};

const filterByScore = (candidate) => {
  return candidate.score > 75;
};

const filterByServiceRecord = (candidate) => {
  return candidate.serviceRecord > 5;
};

const sortByScore = (candidate) => {
  // if (
  //   candidate.age > 50 &&
  //   candidate.score > 75 &&
  //   candidate.serviceRecord > 5
  // ) {
  //   return candidate;
  // }
};

const getMeanAge = (candidate) => {
  return candidate.reduce((total, i) => total + i.age, 0) / candidate.length;
};

const getNamesOnly = (candidate) => {
  return candidate.name;
};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
