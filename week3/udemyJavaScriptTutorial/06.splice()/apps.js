const cars = ['BMW', 'Kia', 'Ford'];
//adding a function to reset the array
function resetArray(){
    //clear out the array by setting it to 0 in length
    cars.length = 0;
    //add the objects back into the array
    cars.push('BMW', 'Kia', 'Ford');
}

//display cars before .splice()
console.log("before .splice() : " + cars);

//remove a specific index (Kia) from here and let them know how many items we want to remove (1)
cars.splice(1,1); 

//display cars after .splice()
console.log("after .splice() : " + cars);

//resetting the array:
resetArray();

//remove multiple items after Kia (2)
const deleteMultipleCars = cars.splice(0,3);

//displaying the deleted items
console.log("Delete multiple cars : " + deleteMultipleCars);
//display current array
console.log("Now the array is : " + cars);

//reseting array
resetArray();

//replace kia with nissan 
const replaceCar = cars.splice (1,1,"Nissan");

//display replaceCar
console.log("replace car : " + replaceCar);
//display current array
console.log("Now the array is : " + cars);
