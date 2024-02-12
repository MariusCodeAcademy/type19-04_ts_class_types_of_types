interface UserObjIf {
  name: string;
  lastName: string;
  isDriver: boolean;
}
export default class User implements UserObjIf {
  private id: number;
  private static count = 0;
  constructor(public name: string, public lastName: string, public isDriver: boolean) {
    User.count++;
    this.id = User.count;
  }
}

const usObj: UserObjIf = new User('James', 'Bond', true);

const num: number = 5;
