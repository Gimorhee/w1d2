var args = process.argv.slice(2);
console.log(rollingDice(args));

function rollingDice(number){
  var randomNumbers = [];
  for (var i = 1 ; i <= number ; i++){
    randomNumbers.push(getRandomNumber());
  }

  return ("rolled " + number + " dice: " + randomNumbers.join(','));
}

function getRandomNumber(){
  return Math.floor(Math.random() * 6 + 1);
}
