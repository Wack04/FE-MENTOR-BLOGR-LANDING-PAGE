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
