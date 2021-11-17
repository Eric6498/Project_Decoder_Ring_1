// Write your tests here!
const {polybius} = require("../src/polybius");
const {expect} = require("chai");

describe("polybius", () => {
    it("should ignore capital letters", () => {
        const input = "Hi";
        const encode = true;
        const expected = "3242";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });

    it("should decode properly" , () => {
        const input = "4511";
        const encode = false;
        const expected = "ya";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
        const input = "hi ya";
        const encode = true;
        const expected = "3242 4511";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });

    it("should return 42 for both i and j ", () => {
        const input = "hi";
        const encode = true;
        const expected = "3242";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });

    it("should return (i/j) when input is 42", () => {
        const input = "42";
        const encode = false;
        const expected = "(i/j)";
        const actual = polybius(input, encode);

        expect(actual).to.equal(expected);
    });
});