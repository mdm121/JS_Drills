// Initialize variables
let name = "Milkiles";
const states = 50;
let firstLetter = name.slice(0, 1);

// Change the first letter in the name to ASCII
firstLetter = firstLetter.charCodeAt(0);

// Log the variable to make sure its correct
console.log(firstLetter);

// Add "5 + 4"
let sum = 5 + 4;

// Determine the person's place in line
if (firstLetter > 76 && firstLetter <= 90) {
    console.log("Back of the Line!!")
} else if (firstLetter > 108 && firstLetter <= 122) {
    console.log("Back of the Line!!")
} else {
    console.log("Next!!")
};

// "Hello World" alert
function sayHello() {
    console.log("Hello World!")
};

sayHello();

// Function that checks the age of a person & displays a message to the console.
function checkAge(who, age) {
    if (age < 21) {
        console.log("Sorry " + who + ", you aren't old enough to view this page!");
    };
};

// Using function to check ages
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

// Favorite veggies array
let veggies = ["potato", "corn", "collard greens", "carrots", "sweet potato"];

// Display the veggies to the console
for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
};

// Object array of people
let random = {
    people: ["Bob", "Brooke", "Jeff", "Mary", "Tina"],
    ages: [49, 20, 83, 10, 17]
};

// Checks more ages
for (let i = 0; i < 5; i++) {
    checkAge(random.people[i], random.ages[i]);
};

// Declare a variable
let length;

// Function that calculates how many characters are in a string
function getLength(any) {
    length = any.length;
    return length;
}

// Call the function
getLength("Hello World");

// Log the length to the console
console.log(length);

// Determine if the number is even & print the results to the console.
if (length % 2 === 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}