export default class User {
  private id: number;
  public count = 0;
  constructor(public name: string, public lastName: string, public isDriver: boolean) {
    this.count++;
    this.id = this.count;
  }
}

// const usObj = new User('James', 'Bond', true);
