const users = [
    { name: 'John', age: 22},
    { name: 'Chloe', age: 27},
    { name: 'Paul', age: 18}
];

//display users
console.log("users looks like : " + users);

//find user that has the age of 18
const user = users.find(user => user.age == 18);
console.log(user);