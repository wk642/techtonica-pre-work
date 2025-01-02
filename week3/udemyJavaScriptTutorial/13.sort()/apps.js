const users =[
    { name: 'John', age: 22 },
    { name: 'Chloe', age: 27 },
    { name: 'Paul', age: 18 },
    { name: 'Anthony', age: 18 }   
];

//display users
console.log ("users looks like this : " + users);

//compare each user and re-order it from youngest to oldest
users.sort((a, b) =>{
    if(a.age > b.age){
        return 1;
    } else{
        return -1;
    }
});

console.log(users);