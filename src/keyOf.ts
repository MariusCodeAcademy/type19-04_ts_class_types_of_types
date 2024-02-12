type Dog = {
  breed: 'doberman' | 'chichuachua' | 'poodel';
  longHair: boolean;
  name: string;
};

const dog1: Dog = {
  name: 'Blupers',
  breed: 'poodel',
  longHair: true,
};

// sukurti tipa is visu galimu breed reiksmiu
type DogBreeds = Dog['breed'];

const breed1: Dog['breed'] = 'doberman';

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
