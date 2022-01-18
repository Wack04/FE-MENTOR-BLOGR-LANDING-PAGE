// Application to Verify a Person is Eligible for lone
let highIncome = true;
let highCredit = true;

let eligibleForLone = highIncome && highCredit;
console.log("Status of Eligibility for Lone: ", eligibleForLone);

let applicationRefused = !eligibleForLone;
console.log("Is Your Application Refused: ", applicationRefused);

//You dont have to use if in logical operators.

//Application to save if person is Gold Customer or Silver Customer
let score = 120;
customerType = score > 100 ? "Gold" : "Silver"; //Logiacal Operator Replaces the Mutiline If Else Statement
defaultType = "Bronze";
currentType = customerType || defaultType;
console.log(currentType);
//You can give only two values in ternary operators.
//There is No need to use If statement in Ternary Operator.

//You Dont Have to Give If Else for everything.

//16-01-2022
let a = "Red";
let b = "Blue";
let c = b;
b = a;
a = c;
console.log("The Value of A is " + a);
console.log("The Value of B is " + b);

//If Else Statements Activity
let Hour = 19;

if (Hour >= 6 && Hour < 12) {
  console.log("Good Morning");
} else if (Hour >= 12 && Hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// 17-01-2022
let role = "Holla Bitches";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  case "admin":
    console.log("Admin User");
    break;
  default:
    console.log("Unknown User");
}

//For LOOP
for (let i = 1; i <= 5; i++) {
  console.log("Hello World", i);
}

//While LOOP
let i = 1;
while (i <= 5) {
  console.log("Hello World", i);
  i++;
}

//Do While Loop
let j = 9;
do {
  console.log("Hello World", j);
  j++;
} while (j <= 5);

//For in Loop

//Object Entries
//Objects Having Key Value Pairs
favouriteBook = {
  Book: "Six of Crows",
  Author: "William Nova",
  Pages: 268,
};
for (key in favouriteBook) {
  console.log(key, favouriteBook[key]);
}

favouriteBooks = [
  "Six of Crows",
  "Vally of Fear",
  "Sign of Four",
  "Hound of Bakerville",
];
for (key in favouriteBooks) {
  console.log(key, favouriteBooks[key]);
}

//For in Loop is Used to acces Key Value Pairs

//For of
colours = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple"];
for (colour of colours) {
  console.log(colour);
}

//Break and Continue
//Using Continue is Depricated and is Not recomended for writing programms
h = 1;
while (h <= 10) {
  if (h % 2 == 0) {
    h++;
    continue;
  }
  console.log(h);
  h++;
}

//Function for maximum of Two Number using If else Note:Else is not Necessary if There is Only Two
function numberMaximum(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) return firstNumber;
  else return secondNumber;
}
numberGiven = numberMaximum(60, 100);
console.log("The Maximum of the Two is", numberGiven);

//Function for Minimum of Two Numbers using Ternary Operator
function numberMinimum(firstNumber, secondNumber) {
  return firstNumber < secondNumber ? firstNumber : secondNumber;
}
secondNumberGiven = numberMinimum(40, 20);
console.log("The Minimum of the Two is", secondNumberGiven);
