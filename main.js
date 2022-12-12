let input = prompt("Yeah, hi, what's the string you want to check? Enter it here: ");

let string = input;

function reverse(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

let reversed = reverse(string);
let stripped = reversed.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let penultimate = stripped.replace(/\s{2,}/g," ");
let final = penultimate.toLowerCase();

let initial = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let second = initial.replace(/\s{2,}/g," ");
let ult = second.toLowerCase();

function isPal(input) {
    if (ult == final) {
        console.log(`Yeah ${input} is a palindrome idk`);
    }
    else {
        console.log(`It appears that ${input} is not a palindrome, idk`);
    }
}

console.log(isPal(input));