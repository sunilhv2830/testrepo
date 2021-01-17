/*Conditional Statements Assignment

1) Write a function that takes time in hours format and return seconds.
getSeconds(1) ➞ 3600
getSeconds(10) ➞ 36000 */

let getSeconds = hour => Math.floor(hour * 60 * 60);
getSeconds(1);


/*----------------------------------
2) Using arithmetic operators ( +, -, *, /, and %), write a function that takes three parameters, num1,
num2, and an operator. Perform the relevant operation on num1 and num2. Try with switch
statement.
operate(10, 20, "-") ➞ -10
// 10 - 20 = -10
operate(6, 4, "+") ➞ 10
// 6 + 4 = 10 

let arethamaticOperations = (num1,num2, operator)=>{
 switch(operator){
  case "-" : return num1 - num2;
	     break;
  case "+" : return num1 + num2;
	     break;
  case "*" : return num1 * num2;
             break;
  case "/" : return num1 / num2;
	     break;
  }
}
arethamaticOperations(2,3,"*");


-----------------------------------
3) Create a function which returns true if given number is fully divided by 3. Return false otherwise.
divisibleByThree(9) ➞ true
divisibleByThree(13) ➞ false 

let divisibleByThree= a => a % 3 === 0?true:false;
divisibleByThree(9);

--------------------------------------
4) Given an object containing counts of both brids and animals, return total count, using a function.
getTotalCount({ birds: 6, animals: 0 }) ➞ 6
getTotalCount({ birds: 2, animals: 7 }) ➞ 9 

let count= {
	birds:number,
	animals:number,
	getTotalCount: function(){
		return count.bird+count.animals;
		}
};
getTotalCount({birds:2,animals:5});


------------------------------------
5) Create a function that takes a number x and returns the xth odd number.
nthOdd(1) ➞ 1
nthOdd(3) ➞ 5 

let nthOdd = x => x * 2 - 1;
nthOdd(7);//returns nth Odd number


--------------------------------------
6) a simple program to determine whether you are eligible for voting. Note, people who are 18 and
older are only eligible.
checkEligibilityOfVoting(17) ➞ false
checkEligibilityOfVoting(19) ➞ true 

let checkEligiblityOfVote = age => age>=18? "Eligible to Vote" : "Not Eligible to Vote";
checkEligiblityOfVote(age);

-------------------------------------
7) Write a template string according to the following example:
const a = "Tim";
const b = "Tom";
const c = "Tony";
const d = "JS";
const statement = "your template string" ➞ "Tim knows JS which Tom doesn't that Tony knew
about" 


const a = "Tim";
const b = "Tom";
const c = "Tony";
const d = "JS";
const statement = `Your template string ->   ${a} knows ${d} which ${b} doesn't that ${c} knew`;
console.log(statement);

---------------------------------------
8) Given a string, return true if its length is even or false if the length is odd.
oddOrEven("javascript") ➞ true
oddOrEven("css") ➞ false 

let oddOrEven = str => str.length % 2 === 0
oddOrEven("javascript");
	
--------------------------------------
9) Create a function that takes a word and returns the new word without including the first
character.
newWord("uxfactory") ➞ "xfactory" 

let newWord = word => word.substring(1);
newWord("uxfactory");


------------------------------------------
10) Write a function that takes a number and prints if its even. If its even, check if less than 10. If its
odd, return false
checkNumber(12) ➞ "Number is even"
"Its not less than 10".
checkNumber(7) ➞ false
checkNumber(6) ➞ "Number is even"
"Its less than 10". 

let checkNumber = number => number % 2 == 0 && number < 10 ? "Number is Even and It's Less Than 10" : "Number is Odd";
checkNumber(3);


OR

let checkNumber = number => {
	if ((number % 2 === 0) && (number > 10)){
		console.log("Number is Even \n It's Greater Than 10");
	}
	else if ((number % 2 === 0) && (number < 10)){
		console.log("Number is Even \n It's Less Than 10");
	}
	else{
		console.log("Number is odd");
	}
}
checkNumber(6);


------------------------------------------------
11) Write a function taking two numbers, a,b. Return true if a is divided by b. Return false otherwise
checkNumber(2,3) ➞ false
checkNumber(21,3) ➞ true 

let divideOrNot = (a,b) => a%b === 0 ;
divideOrNot(2,3);

------------------------------------------------
12) Write a function taking two numbers, a,b. Return if (a+b) wholesquare is odd or even
checkNumber(2,3) ➞ odd
checkNumber(1,3) ➞ even 

let checkSquareOddOrEven = (a,b) => (a+b^2) % 2 === 0 ? "even":"odd";
checkSquareOddOrEven(2,3);


------------------------------------------
13) Write a palindrome fucntion 

let palindrome = str => str === str.split('').reverse().join('') ? "It is Palindrome":"Not a Palindrome";
palindrome("liril");

or

var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}
isPalindrome("liril");

-----------------------------------------
14) Write a function that returns opposite of the number given
checkNumber(3) ➞ -3
checkNumber(-7) ➞ 7 

let oppositeNumber = number => number - number * 2;
oppositeNumber(1);

-----------------------------------------
15) Program to find the biggest of three numbers
findBiggest (2,1,6) ➞ 6 

let biggestOfThree = (num1,num2,num3) => Math.max(num1,num2,num3);
biggestOfThree(2,1,4);

let biggestOfThree = (num1,num2,num3) => {
	if ((num1 > num2)&&(num1 > num3)){
	console.log("num1 is greater");
	}
	else if((num2 > num1)&&(num2 > num3)){
	console.log("num2 is greater");
	}
	else{
	console.log("num3 is greater");
	}
}
biggestOfThree(2,1,4);
*/