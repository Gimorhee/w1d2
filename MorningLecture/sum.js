// Write a Node Program


// that takes in an unlimited number of command-line arguments that are numbers
var args = process.argv;
var justNumbers = args.slice(2);


// and then prints out the sum of the numbers
function sumNumbers(numbers) {
  var sum = 0 ;

  for (var i = 0 ; i < justNumbers.length ; i ++){
    sum += Number(justNumbers[i]);

  }
  return sum;
}
console.log(sum);

// skip any non-whole numbers (what if I dont?)


// Do support negative numbers