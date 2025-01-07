/*Write a javascript function named reverse which takes a string argument and returns the reversed string.
Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function to sort it.
Write a javascript function named length_of_array, which takes an array as argument and returns the number of elements in that array (as opposed to what is given by the length property of the array). Remember undefined can also be an element if it is explicitly set at some index, e.g. x[5] = undefined;. This undefined should be counted, but elements which are not present in the array (as arrays can be sparse), should not be counted.
*/

//Challenege one - reverse a string
//create a string of arguments 
let string = [1, 2, 3, 4, 5];

//display string to see what it is
console.log("Original string was : " +  string);

//reverse the string
string.reverse();

//display for testing purposes
console.log("Reversed string is: " + string);

// Challenege two: Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function to sort it.

//create array of objects
let arrayOfObjects = [
    { radius: 5 },
    { radius: 9 },
    { radius: 2}
];

//display array of objects:
console.log(arrayOfObjects);

//sort array by lowest to highest
arrayOfObjects.sort((a, b) => a.radius - b.radius);

console.log(arrayOfObjects);

// Challenege 3 Write a javascript function named length_of_array, which takes an array as argument and returns the number of elements in that array (as opposed to what is given by the length property of the array). Remember undefined can also be an element if it is explicitly set at some index, e.g. x[5] = undefined;. This undefined should be counted, but elements which are not present in the array (as arrays can be sparse), should not be counted.

//create a function named length_of_array that takes an array as an argument
function length_of_array(arr){
    console.log(arr);
    let length = arr.length;
    console.log(length);
    return length;
}

let testArray = [1, 2, 3, 4];
length_of_array(testArray);