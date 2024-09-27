let fruits = ["apple", "banana", "orange","mango"];
let fruitsString = fruits.join(", ");
console.log(fruitsString); // ["apple,banana,orange,mango"]
let lastFruit=fruits.pop();// returns orange and remove it from the array
console.log(fruits);//["apple", "banana", "orange"]

fruits.push("mango");
console.log(fruits);//["apple", "banana", "orange","mango"]

//slice
let slicedFruits=fruits.slice(1,4);
console.log(slicedFruits);//["apple", "banana", "orange","mango"]
//sort methods to reorder the arr memeber is ascending  order
let numbers=[3,4,1,2];
numbers.sort();
console.log(numbers);[1,2,3,4]
console.log(numbers.reverse());// to reverse the order last will be first
