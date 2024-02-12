type Dog = {
  breed: 'doberman' | 'chichuachua';
  longHair: boolean;
  name: string;
};

const dog1: Dog = {
  name: 'Blupers',
  breed: 'chichuachua',
  longHair: true,
};
// cat tipas gali tureti daug savybiu,
// kievienas key bus string,
// kiekviena value bus string arba number
type Cat = {
  [key: string]: string | number;
};

// isAdult: true,
const cat1: Cat = {
  name: 'Mitcy',
  age: 5,
};
