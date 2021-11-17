// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", ()=> {
    it("should decode or encode a message with a caesar ciper", () => {
        const expected = "def";
        const actual = caesar.caesar("abc", 3);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift value is incorrect or not present", () => {
        const equalsZero = caesar.caesar("abc", 0);
        const lessThanNeg25 = caesar.caesar("abc", -36);
        const greaterThan25 = caesar.caesar("abc", 26);
        const notPresent = caesar.caesar("abc");

        expect(equalsZero).to.be.false;
        expect(lessThanNeg25).to.be.false;
        expect(greaterThan25).to.be.false;
        expect(notPresent).to.be.false;
    });
    
    it("should ignore capital letters", () => {
        const expected  = "def";
        const actual = caesar.caesar("ABC", 3);
        expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
        const expected = "abc";
        const actual = caesar.caesar("xyz", 3);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces before and after encoding", () => {
        const expected = "def def";
        const actual = caesar.caesar("abc abc", 3);
        expect(expected).to.equal(actual);
    });
})