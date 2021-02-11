function filterByAge(candidates) {
  return candidates.age < 50
}

const filterByScore = (candidates) => {
  if(candidates.score > 75){
    return candidates.score;
  }
};

const filterByServiceRecord = (candidates) => {
 if(candidates.serviceRecord > 5){
   return candidates.serviceRecord;
 }
};

const sortByScore = () => {

};

const getMeanAge = (candidates) => {
  // let ageArr = [];
  // for (let i = 0; i < candidates.length; i++){
  //  return ageArr.push(i[age]/candidates.length);
  // }
};

const getNamesOnly = (candidates) => {
  return candidates.name;
};

module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};
