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
  [s: string]: string | number;
};

// isAdult: true,
const cat1: Cat = {
  name: 'Mitcy',
  age: 5,
};

type Address = {
  street: string;
  houseNr: number;
  town: string;
  postCode?: string;
};

// sukurti nauja tipa kuris tures visus key kaip ir Address
type AddressSimilar = {
  [propertyName in keyof Address]: string;
};

// sukurti pilna kopija Address
type AddressCopy = {
  [propertyName in keyof Address]: Address[propertyName];
};

// sukuti tipa addressas be post codo
type AddresNoPost = Omit<Address, 'postCode'>;

// tipas kur visos savybes nebutinos
type AddressOptional = Partial<Address>;

// tpas kur visos savybes privalomos
type AddressWithPostCode = Required<Address>;

const addr1: Address = {
  street: 'Vytauto',
  houseNr: 15,
  town: 'Kaunas',
};
const addr2: AddressWithPostCode = {
  street: 'Vytauto',
  houseNr: 15,
  town: 'Kaunas',
};

interface UserFull {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
