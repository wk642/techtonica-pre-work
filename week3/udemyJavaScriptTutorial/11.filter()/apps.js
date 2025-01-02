const users =[
    { name: 'John', age: 22 },
    { name: 'Chloe', age: 27 },
    { name: 'Paul', age: 18 },
    { name: 'Anthony', age: 18 }   
];

//display users
console.log ("users looks like this : " + users);

//use .filter to find all the ones that are aged 18
const newUsers = users.filter(user => user.age == 18);

//display everything that is the age of 18
console.log(newUsers);

//can also be used for deleting a specific thing, here we will remove the person with the age of 22. we are going to use .filter to find all the ones that are not 22 and display it
const newUser = users.filter (user => user.age != 22);

//display the users that are not 22
console.log("Users that are not 22: " + newUser);