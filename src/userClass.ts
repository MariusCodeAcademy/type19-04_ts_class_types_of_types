export default class User {
  private id: number;
  private static count = 0;
  constructor(public name: string, public lastName: string, public isDriver: boolean) {
    User.count++;
    this.id = User.count;
  }
}

const usObj = new User('James', 'Bond', true);
