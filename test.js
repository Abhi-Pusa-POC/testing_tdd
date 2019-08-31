// const MyScript = require('./script');
// const expect = require('chai').expect;

// describe('test script module',function(){
//     it('this has one module',function(){
//         expect(MyScript).to.be.ok;
//     });
//     describe('add',function(){
//         it('add two numbers',function(){
//             expect(MyScript.add(1,9)).to.equal(10);
//         });
//         it('add two decimals',function(){
//             expect(MyScript.add(1.09,10.23)).to.equal(11.32);
//         });
//     });
//     describe('substract',function(){
//         it('substract two number a>b',function(){
//             expect(MyScript.substract(10,4)).to.equal(6);
//         });
//         it('substract two numbers a<b',function(){
//             expect(MyScript.substract(2,9)).to.equal(-7);
//         });
//     });
//     describe("multiply",function(){
//         it('multiply two numbers',function(){
//             expect(MyScript.multiply(3,6)).to.equal(18);
//         });
//     });
//     describe("divide",function(){
//         it('divides two numbers',function(){
//             expect(MyScript.divide(10,5)).to.equal(2);
//         })
//     });
// })


const myScript = require('./script');
const expect = require('chai').expect;

describe('script test cases',function(){
    it('one module',function(){
        expect(myScript).to.be.ok;
    });
    describe('main method',function(){
        it('new position ',function(){
            expect(myScript.main({x:1,y:1},'LMLMRMLM')).to.eql({x:2,y:2});
        });
    });
    describe('getNewPos',function(){
        it('get new position from old',function(){
            expect(myScript.getNextPosition({x:1,y:1},'E')).to.eql({x:2,y:1});
        });
    });
    describe('getNextDirection',function(){
        it('get next direction from the current direction',function(){
            expect(myScript.getNextDirection('E','L')).to.eql('N');
        });
    });
});