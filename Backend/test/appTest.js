var assert = require('chai').assert;
const app=require('../App');

const testArray=[2,3,5,7];
const testNum=9;

var result=app.primeNumbers(testNum);


describe('App',function(){

    it('App should return something ',function(){

        assert.deepEqual(app.primeNumbers(testNum),testArray);
    }

    );
    it('App should return something ',function(){

        assert.deepEqual(app.primeNumbers(testNum),testArray);
    }

    );

});


