export default class User {
    constructor(name, lastName, isDriver) {
        this.name = name;
        this.lastName = lastName;
        this.isDriver = isDriver;
        this.count = 0;
        this.count++;
        this.id = this.count;
    }
}
// const usObj = new User('James', 'Bond', true);
