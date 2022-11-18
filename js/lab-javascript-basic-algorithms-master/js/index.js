// Iteration1:Names and Input

const hacker1 = "Mike";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Google Chrome";
console.log(`The navigator's name is ${hacker2}`);

// Iteration2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration3:Loops
// //3.1 
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1.split(""));
}