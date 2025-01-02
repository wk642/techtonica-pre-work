const users =['John', 'Stasha', 'Chloe', 'Michel'];

//display users before reverse()
console.log(users);

//use .join to create a string with the array
const newUsers = users.join();

//displays the string
console.log(newUsers);

//connect it by using a - instead
const newDashUsers = users.join(' - ');

//display new string
console.log("String separated by ' - ': " + newDashUsers);