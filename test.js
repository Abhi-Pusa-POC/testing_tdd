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