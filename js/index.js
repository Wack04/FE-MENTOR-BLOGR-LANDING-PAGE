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
favouriteBook={
  "Book: Six of Crows"
}
for ()
