class User {
    constructor(name, lastName, isDriver) {
        this.name = name;
        this.lastName = lastName;
        this.isDriver = isDriver;
        User.count++;
        this.id = User.count;
    }
}
User.count = 0;
export default User;
const usObj = new User('James', 'Bond', true);
const num = 5;
