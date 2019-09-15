var assert = require('chai').assert;
const app=require('../App');

const primetestarr1=[2,3,5,7];
const primetestNum1=10;

const primetestarr2=[2,3,5,7,11,13,17];
const primetestNum2=18;

describe('Prime Number Generator Test',function(){

    it('Test 1',function(){

        assert.deepEqual(app.primeNumbers(primetestNum1),primetestarr1);
    });
    
    it('Test 2',function(){

        assert.deepEqual(app.primeNumbers(primetestNum2),primetestarr2);
    });

});

describe('Median Generator Test',function(){

    it('Test 1',function(){

        assert.deepEqual(app.median(primetestarr1),[3,5]);
    });
    
    it('Test 2',function(){

        assert.deepEqual(app.median(primetestarr2),7);
    });

});
