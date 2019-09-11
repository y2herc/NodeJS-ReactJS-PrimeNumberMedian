var express = require('express');
var app = express();

app.get('/primeNumber/:Num', function (req, res) {
   
  var testing=parseInt(req.params.Num);
  var results=myFunction((testing));
  console.log(results);
  res.send({ result: results });

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

function myFunction(maxNumber){

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
