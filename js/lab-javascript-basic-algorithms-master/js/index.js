let text = "Amor, Roma";
let backWardsText = "";

for (let i = text.length - 1; i > 0; i--) {
    backWardsText += text[i]
}

if (text.toLocaleLowerCase() === backWardsText.toLocaleLowerCase()) {
    console.log(`${text} is a Palindrome!`);
} else {
    console.log(`${text} is not a Palindrome!`)
}