/*ITERTIONS AND CONDITIONAL ASSIGNMENT

1) Write a function to calculate Sum and Average an array element. 

sumAndAverage([10, 20,30, 40]);
Output:
Sum: 100
Average: 25*/

let sumAndAverage = arr =>{
	let sum=0,average;
	for(let i=0;i<arr.length;i++){
		sum += arr[i];
		average = sum/arr.length;
	}
console.log("Sum:",sum);
console.log("Average:",average);
}
sumAndAverage([10,20,30,40]);

/*--------------------------------------------------
2) Create a function to multiply all of the values in an array by the amount of values in the
given array.
multiplyByLength ([2, 3, 1, 0])
Output:
[8, 12, 4, 0] 

let multiplyByLength = originalArray =>{
	multiplyByLengthResult = [];
	for (let i=0;i<originalArray.length;i++)
	{
	multiplyByLengthResult.push(originalArray[i]*originalArray.length);
	}
console.log(multiplyByLengthResult);
}
multiplyByLength([2,3,1,0]);
multiplyByLength([1,2,3,4,5]);

---------------------------------------------------
3) Write a function to create multiplication table by using while loop
 multiplicationTable(5)
Output:
5 X 1 = 5
5 X 2 = 10 . . .
5 X 10 = 50 

let tableUsingWhile = multiplicant =>{
	let i=1;
	let result
	while(i<=10){
	result=multiplicant*i;
	console.log(multiplicant+"X"+i+"="+result);
	i++;
	}
}
tableUsingWhile(5);

--------------------------------------------------
4) Write a function to read a string, push individual letters into an array in revers order and join
  them with ‘#’ keyword
  reverseStringAndJoin(‘HTML’);
  Output: "L#M#T#H"

let reverseString = str => {
  newarr = str.split("");
  result = [];
  x = newarr.length;
  for (i = x-1; i > -1; i--) {
    result.push(newarr[i]+"#");
  }
  str = result.join("");
  return str;
}

reverseString("hello");

---------------------------------------------------
5) Create a function to read multidimensional array and push the sum of its values in different
array
sumArray([[1, 2, 3], [1, 3, 4]])
output: [6, 8];

let sumOfMultiDimensional = arr =>{
	let sum = 0,sum1=0;
	let resultArray=[];
	for(let i=0;i<arr.length;i++){
		
		for(let j=0;j<arr[i].length;j++){
		sum += arr[i][j];
		
	}
	}
	resultArray.push(sum);
console.log(resultArray);
}
sumOfMultiDimensional([[1,2,3],[3,4,5]]);

-------------------------------------------------------
6) Read an array and push the even and odd elements in two different arrays.
evenAndOddArray([12, 5, 7, 10, 1]);
output:
evenArray: [ 12, 10]
oddArray: [5, 7, 1]

let oddEven = arr => {
	let oddElements = [];
	let evenElements = [];
	for(let i=0; i<arr.length;i++){
	if(arr[i]%2==0){
	evenElements.push(arr[i])
	}
	else{
	oddElements.push(arr[i])
	}
}
console.log("Odd Elements",oddElements);
console.log("Even Elements",evenElements);
}
oddEven([1,2,3,4]);

---------------------------------------------------------
7) Create a function that takes an array of numbers. Return the largest number in the array.
findLargestNum ([10, 98,7]);
output: 98 

let largestArray = arr =>{
	for(let i=0;i<arr.length;i++){
	return Math.max(...arr);
	}
}
largestArray([8,1,3,9]);

---------------------------------------------------------
8) Create a function that takes an array of numbers. Return the smallest number in the array.
findSmallestNum ([50, 67, 45]);
output: 45 

let largestArray = arr =>{
	for(let i=0;i<arr.length;i++){
	return Math.min(...arr);
	}
}
largestArray([8,1,3,9]);


----------------------------------------------------------
9) check elements are divisible by 2 or not and print them as shown below
checkElements([6, 99, 10])
output:
6 divided by 2
99 can’t divided by 2
10 divided by 2 

let divisibleByTwo = arr => {
	for(let i=0;i<arr.length;i++){
		if(arr[i]%2==0){
		console.log(arr[i],"Divided by 2");
		}
		else{
		console.log(arr[i],"Cannot be Divided by 2");
		}
	}
}
divisibleByTwo([2,3,4,6]);

-----------------------------------------------------------
10) Create a function which returns the total of all odd numbers up to and including n. n will be
given as an odd number.
addOddToN(5)
output: 9 // 1 + 3 + 5 = 9 

let addOddToN = arr =>{
	for(let i=1;i<=arr;i++){
	if(i%2!==0){
	return i;
}
}
}
addOddToN([5]);*/