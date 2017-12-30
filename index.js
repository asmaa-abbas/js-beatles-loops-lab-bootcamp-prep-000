const theBeatlesPlay = (arrOfMusicians, arrOfInstruments) => {
  let arr = [];
  
  arrOfMusicians.forEach((musician, idx) => {
    arr.push(`${musician} plays ${arrOfInstruments[idx]}`);
  });
  
  return arr;
};

const johnLennonFacts = (facts) => {
  let exclaimedFacts = [];
  let i = 0;
  
  while(facts.length > 0){
    exclaimedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  
  return exclaimedFacts;
};

