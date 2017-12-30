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
  
  while(i < facts.length){
    exclaimedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  
  return exclaimedFacts;
};


const iLoveTheBeatles = (num) => {
  let arr = [];
  
  do {
    arr.push(`I love the Beatles!`);
    n++;
  } while (num < 15);
  
  return arr;
};
