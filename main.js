let string = prompt("Enter a string to test if it's a palindrome: ");

let input = string;

function reverse(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  }

  function isPal(input) {
    let reversed = reverse(input);
    let final = reversed.toLowerCase();
    input = input.toLowerCase();
    for (let i = 0; i < input.length / 2; i++) {
      if (input[i] !== final[i]) {
        return console.log(`It appears that ${input} is not a palindrome`);
      }
    }
    return console.log(`It appears that ${input} is a palindrome`);
  }

console.log(isPal(input));