var express = require('express');
var app = express();

app.get('/primeNumber/:Num', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  var inputNumber=parseInt(req.params.Num);
  var results=median(primeNumbers(inputNumber));
  res.send({ result: results });

})

app.listen(8081, function () {

   console.log("Server listening" );
})

function primeNumbers(maxNumber){

  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let number = 2; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number);

      let nextNumber = number * number;

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }
  
  return primes;
}

function median(numbers) {
  var median = [], numsLen = numbers.length;

  if (
      numsLen % 2 === 0 
  ) {
    
      var val1 = ([numsLen / 2 - 1]) ;
      var val2=parseInt(val1)+1;
      median=[numbers[val1],numbers[(val2)]];

  } else { 

      var val=(numsLen - 1) / 2;
      median = numbers[val];
  }

  return median;
}
module.exports.primeNumbers=primeNumbers;
module.exports.median=median;
