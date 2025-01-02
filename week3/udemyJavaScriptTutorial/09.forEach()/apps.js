const users = [
    { name: 'John', age: 22},
    { name: 'Chloe', age: 27},
    { name: 'Paul', age: 18}
];

//display users
console.log("users looks like : " + users);

//create a for loop to go through each object to get their age and display it
users.forEach(user => console.log("Age is " + user.age));

//create a for loop to go through each object to get their name and display it
users.forEach(user => console.log("Name is " + user.name));