// define input

// lowercase and reverse the input
// compare lowercased input to lowercased + reversed input 

let string = prompt("Enter a string to check if it's a palindrome: ")

let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
    console.log(reversed);

}

console.log(reversed);

if (reversed.toLowerCase() === string.toLowerCase()) {
    console.log("Yeah it's a palindrome most likely");
} else {
    console.log("No it's not a palindrome, most likely");
}



// /////////////
// let str = reversed.toLowerCase();
// let doneTrimming = false;
// let ret = ""
// for (let index = 0; index < str.length; index++) {
//     if(str[index] !== ' '){
//         doneTrimming = true
//     }
//     if(doneTrimming){
//         ret += str[index]
//     }
// }
// console.log(ret);