const filterByAge=(el)=>{return el.age<=50};
const filterByScore=(el)=>el.score>75;
  const filterByServiceRecord=(el)=>el.serviceRecord>5;
  const sortByScore=(arr)=>{return arr.slice().sort((a,b)=>b.score-a.score)};

  
  function getMeanAge(arr){
    let total=arr.reduce((total, element)=>total+element.age, 0);
    let mean=total/arr.length;
    return mean;
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



