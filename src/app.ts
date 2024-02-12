import User from './userClass.js';

console.log('Hello from app.ts!');

const user1 = {
  id: 1,
  name: 'James',
  lastName: 'Bond',
  isDriver: true,
};
console.log('user1 ===', user1);
const user2 = new User('James', 'Bond', true);
const user3 = new User('Jane', 'Dow', false);

user2.name = 'Serebtautas';
console.log('user3 ===', user3);
console.log('user2 ===', user2);
