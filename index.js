const filterByAge=(el)=>{return el.age<=50};
const filterByScore=(el)=>el.score>75;
  const filterByServiceRecord=(el)=>el.serviceRecord>5;
  const sortByScore=(arr)=>{return arr.slice().sort((a,b)=>b.score-a.score)};

  
  function getMeanAge(arr){
    let total=0;
    arr.forEach(el=> total+=el.age);
    return total/arr.length;
  };
  const getNamesOnly=()=>{}





module.exports = {
  filterByAge,
  filterByScore,
  filterByServiceRecord,
  sortByScore,
  getMeanAge,
  getNamesOnly,
};



