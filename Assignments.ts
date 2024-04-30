// Install Node.js, TypeScript and VS Code on your computer.




// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, 
// such as, “Hello Eric, would you like to learn some Python today?”

/* let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`)  */



// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



/* let personName1: string = "Eric";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.charAt(0).toUpperCase() + personName1.slice(1).toLowerCase()); */




// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

/* console.log(`Thomas Shelby said, "You Can Change What You Do, But You Can’t Change What You Want"`) */


// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

/* let authorName: string = "Thomas Shelby";
console.log(`${authorName} said, You Can Change What You Do, But You Can’t Change What You Want`)  */


// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around 
// the name is displayed. Then print the name after striping the white spaces.

/* // Define a type alias for names
type Name = string;

// Store the person's name with whitespace characters
const personName: Name = "\t John Doe \n";  // Includes a tab (\t) and a newline (\n)

// Print the name with whitespace
console.log(`Name with whitespace: ${personName}`);

// Function to remove whitespace characters
function removeWhitespace(name: Name): Name {
  return name.replace(/\s/g, "");
}

// Print the name without whitespace
const trimmedName = removeWhitespace(personName);
console.log(`Name without whitespace: ${trimmedName}`); */


// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

/* let addition: number = 5 + 3;
console.log(addition);
let subtraction: number = 10 - 2;
console.log(subtraction);
let multiplication: number = 4 * 2;
console.log(multiplication);
let division: number = 16 / 2;
console.log(division);
 */
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.


/* console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2); */



// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

/* let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}`); */

/* // Define a type alias for numbers (optional but good practice)
type FavoriteNumber = number;

// Store your favorite number
const favoriteNumber: FavoriteNumber = 42;  // Replace 42 with your actual favorite number
// Create a message revealing the favorite number
function revealFavoriteNumber(number: FavoriteNumber): string {
  return `Guess what? My favorite number is ${number}!`;
}
// Print the message
const message = revealFavoriteNumber(favoriteNumber);
console.log(message);
 */

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// create a variable to store a number
/* let favoriteNumber: number = 7;
console.log(`My favorite number is ${favoriteNumber}`);
 */

/* // creating a variable to store a person's name and to print a message to that person
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`) */




// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.


/* const names: string[] = ["John", "Jane", "Doe", "Alice", "Bob"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names); */


// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.



/* const names: string[] = ["John", "Jane", "Doe", "Alice", "Bob"];
console.log(`Hello ${names[0]}, how are you doing today?`);
console.log(`Hello ${names[1]}, how are you doing today?`);
console.log(`Hello ${names[2]}, how are you doing today?`);
console.log(`Hello ${names[3]}, how are you doing today?`);
console.log(`Hello ${names[4]}, how are you doing today?`);
 */



// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


/* const transportation: string[] = ["Car", "Motorcycle", "Bicycle", "Bus", "Train"];
console.log(`I would like to own a ${transportation[0]}`);
console.log(`I would like to own a ${transportation[1]}`);
console.log(`I would like to own a ${transportation[2]}`);
console.log(`I would like to own a ${transportation[3]}`);
console.log(`I would like to own a ${transportation[4]}`); */




// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


/* const guestList: string[] = ["Haris", "Hamza", "Zaid"];
console.log(`Hello ${guestList[0]}, you are invited to dinner`);
console.log(`Hello ${guestList[1]}, you are invited to dinner`);
console.log(`Hello ${guestList[2]}, you are invited to dinner`); */


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.



// Guest List Update - 
/* // Define a type alias for guest names
type GuestName = string;

// Create a guest list
const guestList: GuestName[] = ["Haris", "Hamza", "Zaid"];

// Announce who cannot make it
const absentGuest: GuestName = "Zaid";  // Guest who can't make it
console.log(`${absentGuest} unfortunately cannot make it to the dinner.`);

// Replace David with a new guest
guestList.splice(guestList.indexOf(absentGuest), 1, "Hashir");  // Replace David with Emily

// Create an invitation message
function invitation(guest: GuestName): string {
  return `Dear ${guest}, you are cordially invited to a dinner party on Saturday night. Please RSVP by Friday.`;
}

// Print invitations to the remaining guests
guestList.forEach((guest) => {
  console.log(invitation(guest));
}); */





// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



/* type GuestName = string;

// Create a guest list
const guestList: GuestName[] = ["Haris", "Hamza", "Zaid"];

// Announce bigger table
console.log("We found a bigger table! More guests can come to the dinner.");

// Add a guest to the beginning
guestList.unshift("Adeel");  // Add Adeel at the beginning

// Add a guest to the middle
guestList.splice(2, 0, "Jawwad");  // Insert Jawwad at index 2 (middle)

// Add a guest to the end using append
guestList.push("Rana");  // Add Rana at the end

// Create an invitation message
function invitation(guest: GuestName): string {
  return `Dear ${guest}, you are cordially invited to a dinner party on Saturday night. Please RSVP by Friday.`;
}

// Print invitations to all guests
guestList.forEach((guest) => {
  console.log(invitation(guest));
}); */





// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


/* type GuestName = string;

// Create a guest list
const guestList: GuestName[] = ["Adeel", "Haris", "Jawwad", "Hamza", "Zaid", "Raza"];

// Announce smaller table limitation
console.log("Unfortunately, the new table won't arrive in time. We can only invite two people to dinner.");

// Function to create an apology message
function apology(guest: GuestName): string {
  return `Dear ${guest}, I'm so sorry, but due to a table delay, I can only invite two people to dinner this time. I hope to see you soon!`;
}

// Remove guests until only two remain
while (guestList.length > 2) {
  const removedGuest = guestList.pop();  // Remove the last guest
  if (removedGuest) {
    console.log(apology(removedGuest));  // Send apology message to removed guest
  }
}

// Inform remaining guests
console.log("Here are the remaining guests who are still invited:");
guestList.forEach((guest) => {
  console.log(`- ${guest}`);
});

// Remove remaining guests (optional)
guestList.length = 2;  // Clear the list explicitly

// Verify empty list
console.log("Final Guest List:", guestList);  // Print the empty list
 */



// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.


// const countryName : string[] = ["Canada", "Australia", "New Zealand", "Japan", "Switzerland"];

// • Print your array in its original order.


// console.log(countryName);


// • Print your array in alphabetical order without modifying the actual list.


// console.log(countryName.sort());


// • Show that your array is still in its original order by printing it.


// console.log(countryName);


// • Print your array in reverse alphabetical order without changing the order of the original list.


// console.log(countryName.sort().reverse());


// • Show that your array is still in its original order by printing it again.


// console.log(countryName);


// • Reverse the order of your list. Print the array to show that its order has changed.


// console.log(countryName.reverse());


// • Reverse the order of your list again. Print the list to show it’s back to its original order.


// console.log(countryName);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.


// console.log(countryName.sort());


// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// console.log(countryName.sort().reverse());


// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


/* type GuestName = string;

// Create a guest list
const guestList: GuestName[] = ["Adeel", "Haris", "Jawwad", "Hamza", "Zaid", "Raza"];

// Announce smaller table limitation
console.log("Unfortunately, the new table won't arrive in time. We can only invite two people to dinner.");

// Function to create an apology message
function apology(guest: GuestName): string {
  return `Dear ${guest}, I'm so sorry, but due to a table delay, I can only invite two people to dinner this time. I hope to see you soon!`;
}

// Remove guests until only two remain
while (guestList.length > 2) {
  const removedGuest = guestList.pop();  // Remove the last guest
  if (removedGuest) {
    console.log(apology(removedGuest));  // Send apology message to removed guest
  }
}

// Inform remaining guests
console.log("Here are the remaining guests who are still invited:");
guestList.forEach((guest) => {
  console.log(`- ${guest}`);
});

// Remove remaining guests (optional)
guestList.length = 2;  // Clear the list explicitly

// Verify empty list
console.log("Final Guest List:", guestList);  // Print the empty list

console.log(`You are inviting ${guestList.length} people to dinner.`); */



// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.


/* const Car: string[] = ["Toyota", "Honda", "Suzuki", "Audi", "BMW"];
// Print the mountains
console.log("Some of the world's tallest mountains:");
Car.forEach((Car) => 
{
  console.log(`- ${Car}`);
});
 */


// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


/* const car: { make: string, model: string } = 
{
  make: "Toyota",
  model: "Corolla",
}; */



// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


// List of Mountains (with intentional error)
/* const mountains: string[] = [
  "Mount Everest",
  "K2",
  "Kangchenjunga",
  "Lhotse",
  "Makalu"
];

// Print the mountains (with error) - Trying to access the 6th element (out of bounds)
console.log("Some of the world's tallest mountains:");
console.log(`- ${mountains[5]}`);  // This line will cause an error

const index = 4; // Declare the variable index

mountains.forEach((mountain) => console.log(`- ${mountain}`));
if (index >= 0 && index < mountains.length) {
  console.log(`- ${mountains[index]}`);
} else {
  console.error("Invalid index for mountain list.");
}

 */

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



/* let car = "subaru";
let age = 25;
let isStudent = true;
let pie = "apple";

// Test 1: Equality comparison
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");  // True - Checks for value equality

// Test 2: Strict equality comparison
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");  // True - Checks for value and type equality

// Test 3: Inequality comparison
console.log("Is car != 'honda'? I predict True.");
console.log(car != "honda");  // True - Checks for value inequality

// Test 4: Strict inequality comparison
console.log("Is car !== 'Subaru'? I predict False.");
console.log(car !== "Subaru");  // False - Checks for value and type inequality (case sensitive)

// Test 5: Greater than comparison
console.log("Is age > 20? I predict True.");
console.log(age > 20);  // True - Checks if age is greater than 20

// Test 6: Less than or equal comparison
console.log("Is age <= 25? I predict True.");
console.log(age <= 25);  // True - Checks if age is less than or equal to 25

// Test 7: Logical AND (both conditions must be true)
console.log("Is age > 18 && isStudent === true? I predict True.");
console.log(age > 18 && isStudent === true);  // True - Both conditions are met

// Test 8: Logical OR (at least one condition must be true)
console.log("Is age < 30 || pie === 'cherry'? I predict True.");
console.log(age < 30 || pie === "cherry");  // True - Age is less than 30

// Test 9: Logical NOT (inverts the condition)
console.log("Is !(age === 30)? I predict True.");
console.log(!(age === 30));  // True - Age is not equal to 30 (negated)

// Test 10: Falsy check (checks if a value is truthy or falsy)
console.log("Is !isStudent? I predict False.");
console.log(!isStudent);  // False - isStudent is truthy (true)
 */


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


/* let car = "subaru";
let age = 25;
let isStudent = true;
let fruits = ["apple", "banana", "orange"];

// String equality and inequality (True/False)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == "subaru");  // True - Checks for value equality (lowercase)

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === "Subaru");  // False - Checks for value and type equality (case sensitive)

// Lowercase function tests (True/False)
console.log("Is 'Miata'.toLowerCase() === 'miata'? I predict True.");
console.log("Miata".toLowerCase() === "miata");  // True - Converts both to lowercase for comparison

console.log("Is age.toString() === '25'? I predict True.");
console.log(age.toString() === "25");  // True - Converts age to string for comparison

// Numerical tests (True/False)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(!isStudent || age > 18);  // True - OR condition is true

console.log("Is 'mango' in fruits? I predict False.");
console.log("mango" in fruits);  // False - "mango" is not in the fruits array
 */


// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

/* let alienColor: string = "green"; */

// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

/* if (alienColor == "green") {
  console.log("The player just earned 5 points!");
} */

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

/* let alien_color = "red";

if (alien_color === "green") {
  console.log("You just earned 5 points!");
} */


// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

/* let alienColor: string = "red";

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if (alienColor == "green") {
  console.log("The player just earned 5 points!");
}

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

if (alienColor != "green") {
  console.log("The player just earned 10 points!");
}

// • Write one version of this program that runs the if block and another that runs the else block.

if (alienColor == "green") {
  console.log("The player just earned 5 points!");
}
else {
  console.log("The player just earned 10 points!");
} */


// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// let alien_color = "yellow";

// • If the alien is green, print a message that the player earned 5 points.
/* if (alien_color === "green") {
  console.log("The player earned 5 points!");
}
// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color === "yellow") {
  console.log("The player earned 10 points!");
}
// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color === "red") {
  console.log("The player earned 15 points!");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color === "green") {
  console.log("The player earned 5 points!");
}
else if (alien_color === "yellow") {
  console.log("The player earned 10 points!");
}
else if (alien_color === "red") {
  console.log("The player earned 15 points!");
} */
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

/* let age: number = 25;

// • If the person is less than 2 years old, print a message that the person is a baby.

if (age < 2) {
  console.log("The person is a baby.");
}

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
}

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} 

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
}

// • If the person is age 65 or older, print a message that the person is an elder.

else if (age >= 65) {
  console.log("The person is an elder.");
} */

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


/* let favorite_fruits: string[] = ["apple", "banana", "mango"];
let target_fruits = ["apple", "strawberry", "kiwi"];  // Fruits to check for

for (let i = 0; i < target_fruits.length; i++) {
  let found = false;
  for (let j = 0; j < favorite_fruits.length; j++) {
    if (target_fruits[i] === favorite_fruits[j]) {
      found = true;
      break; // Exit the inner loop if found
    }
  }
  if (found) {
    console.log(`You really like ${target_fruits[i]}!`);
  } else {
    console.log(`${target_fruits[i]} is not in your favorite fruits list.`);
  }
}
 */


// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


/* let Name_Array : string[] = ["John", "admin", "Jane", "Doe", "Alice", "Bob"];
for (let i = 0; i < Name_Array.length; i++) {
  if (Name_Array[i] === "admin") {
    console.log(`Hello ${Name_Array[i]}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${Name_Array[i]}, thank you for logging in again.`);
  }
}
 */

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


/* let users: string[] = []; // Empty users list

// Check if the list of users is empty
if (users.length === 0) {
  console.log("We need to find some users!");
}

// Loop through the users list (which is empty in this case)
// Since the list is empty, this loop won't execute
for (let user of users) {
  console.log(`Hello, ${user}!`);
}
 */


// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

let current_users: string[] = ["Ahmed", "Haris", "Hamza", "Zaid", "Raza"];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users: string[] = ["Adeel", "Rafay","Ahmed"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



/* function checkUsernameAvailability(username: string): string {
  const usernameLower = username.toLowerCase();
  for (const existingUser of current_users) {
    if (existingUser.toLowerCase() === usernameLower) {
      return `${username} is already taken. Please choose another username.`;
    }
  }
  return `${username} is available!`;
}

for (const newUser of new_users) {
  const message = checkUsernameAvailability(newUser);
  console.log(message);
}
 */


// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


/* let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0 ; i<10 ; i++)
  {
    if (i == 1)
    {
      console.log(`${i}st`);
    }
    else if (i == 2)
    {
      console.log(`${i}nd`);
    }
    else if (i == 3)
    {
      console.log(`${i}rd`);
    }
    else
    {
      console.log(`${i}th`);
    }
  } */



// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

/* 
let favoritePizzas: string[] = ["Pepperoni", "Hawaiian", "Meat Lover's"];

// Loop through the pizza list and print a sentence about each one
favoritePizzas.forEach(pizza => {
  console.log(`I like ${pizza} pizza.`); // Print with pizza name in lowercase
});

// Print a message stating how much you like pizza (outside the loop)
console.log(`I really love ${favoritePizzas} pizza!`);
 */


// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


/* let furryFriends: string[] = ["Dog", "Cat", "Rabbit"];

// Loop through the animal list and print a statement about each animal
for (let animal of furryFriends) {
  console.log(`${animal} would make a great pet!`);
}

// Print a message stating what these animals have in common (outside the loop)
console.log("All of these animals are furry and cuddly!"); */


// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


/* function make_shirt (size : string, message :string)
{
  console.log(`The size of the shirt is ${size} with message printed on it is ${message}`);
}
make_shirt("Large", "I love TypeScript");
make_shirt("Medium", "I love Programming"); */


// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


/* function make_shirt(size = "L", message = "I love TypeScript!"): void {
  console.log(`I'm making a ${size} shirt with the message: "${message}".`);
}

// Call the function with different sizes and messages
make_shirt(); // Default size (L) and message
make_shirt("M"); // Medium size, default message
make_shirt("S", "Python is cool too!"); // Small size, custom message */



// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


/* function describe_city(city: string, country: string = "Pakistan"): void {
  console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("London", "United Kingdom");
describe_city("New York", "USA"); */


// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


/* function city_country(city: string, country: string): void {
  console.log( `${city}, ${country}`);
}
city_country("Lahore", "Pakistan"); 
city_country("New York", "USA");
city_country("London", "United Kingdom"); */



/* function city_country(city: string, country: string): string {
  return `${capitalizeFirstLetter(city)}, ${capitalizeFirstLetter(country)}`;
}

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(str: string): string {
  const words = str.split(" ");
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(" ");
} 

// Call the function and print the returned string
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("New York", "USA"));
console.log(city_country("Tokyo", "Japan"));*/



// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


/* function make_album(artist: string, title: string, tracks?: number): object {
  return { artist: artist.charAt(0).toUpperCase() + artist.slice(1), title: title.charAt(0).toUpperCase() + title.slice(1), tracks };
}

// Create albums with and without track count
const album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
const album2 = make_album("Kendrick Lamar", "To Pimp a Butterfly", 14);
const album3 = make_album("Beyoncé", "Lemonade");

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3); */


// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


/* const magicians: string[] = ["David Copperfield", "David Blaine", "Harry Houdini", "Penn & Teller"];
function show_magicians(magicians: string[]): void {
  magicians.forEach(magician => console.log(magician));
}
show_magicians(magicians); */


// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


/* let magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo"];

function show_magicians(magicians: string[]): void {
  console.log("Here is a list of magicians:");
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): void {
  // """Modifies the magicians list by adding 'the Great' to each name."""
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
}

// Make the magicians great
make_great(magicians);

// Show the updated list
show_magicians(magicians);
 */


// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicians: string[] = ["David Copperfield", "Criss Angel", "Dynamo"];

function show_magicians(magicians: string[]): void {
  console.log("Here is a list of magicians:");
  for (let magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push(`${magician} the Great`);
  }
  return great_magicians;
}

// Make a copy of the magicians list
let great_magicians = make_great(magicians.slice());  // Use slice() to copy

// Show the original list
show_magicians(magicians);

// Show the list with 'the Great' added
show_magicians(great_magicians);



// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function build_sandwich(...ingredients: string[]): void {
  if (ingredients.length === 0) {
    console.log("You didn't order any ingredients for your sandwich.");
    return;
  }

  console.log("You ordered a sandwich with:");
  for (let ingredient of ingredients) {
    console.log(`  * ${ingredient}`);
  }
}

// Call the function with different numbers of arguments
build_sandwich("bread", "cheese", "ham");
build_sandwich("bread", "lettuce", "tomato");
build_sandwich(); // No arguments



// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


/* function create_car(manufacturer: string, model: string, optionalDetails: object): object {
  const car = { manufacturer, model };
  Object.arguments(car, optionalDetails);
  return car;
}

// Create a car with required information and two other details
const car1 = create_car("Tesla", "Model S", { color: "blue", autopilot: "standard" });
const car2 = create_car("Toyota", "Camry", { year: 2023 }); // Fix: Pass the year as an object property

// Print the car information objects
console.log(car1);
console.log(car2);
 */