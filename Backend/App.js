var express = require('express');
var app = express();

app.get('/primeNumber/:Num', function (req, res) {
   
  var temp=parseInt(req.params.Num);
  var results=primeNumbers(temp);
  res.send({ result: results });

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
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
  
  return median(primes);
}

function median(numbers) {
  var median = [], numsLen = numbers.length;

  if (
      numsLen % 2 === 0 // is even
  ) {
      // average of two middle numbers
      var val1 = ([numsLen / 2 - 1]) ;
      var val2=parseInt(val1)+1;
      median=[numbers[val1],numbers[(val2)]];

  } else { // is odd
      // middle number only
      var val=(numsLen - 1) / 2;
      median = numbers[val];
  }

  return median;
}
module.exports.primeNumbers=primeNumbers;