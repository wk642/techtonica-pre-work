const users =[
    { name: 'John', age: 22 },
    { name: 'Chloe', age: 27 },
    { name: 'Paul', age: 18 },
    { name: 'Anthony', age: 18 }   
];

//display users
console.log ("users looks like this : " + users);

//create new array to bring back new data in this case just the index
const newUsers = users.map(user => user.index);

//display the new data:
console.log(newUsers);

//create another one that brings back just their names
const newUsersNames = users.map(user => user.name);

//display the names
console.log("Names are: " + newUsersNames);