//#1 Looping a triangle #
// Write a loop that makes seven calls to console.log to output the following triangle
console.log("#1 - Looping a triangle Exercise");
let result = "#";
let counter = 7;

for (let i = 0; i < counter; i++) {
  console.log(result);
  result = result + "#";
}
console.log("\n");

//or
for (let output = "#"; output.length < 8; output += "#") console.log(output);

//#2 FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz"
// for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
console.log("#2 - FizzBuzz Exercise");
let fizzBuzzCounter = 100;
for (let i = 1; i <= fizzBuzzCounter; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  }
}
console.log("\n");

//#3 Chessboard
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character.
// The characters should form a chessboard
console.log("#3 - Chessboard Exercise");
let boardSize = 8;
let board = "";

for (let i = 0; i < boardSize; i++) {
  board = "";

  for (let j = 0; j < boardSize; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else board += "#";
  }
  console.log(board);
}

//            _
//        .__(.)< (MEOW)
//         \___)
//  ~~~~~~~~~~~~~~~~~~
