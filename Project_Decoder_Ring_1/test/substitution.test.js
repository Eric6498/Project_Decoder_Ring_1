// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substituion", () => {
    it("Should return 'false' if alphabet does not exist.", () => {
        const actual = substitution("Something", undefined, true);
        expect(actual).to.be.false;
    });
    it("Should return 'false' if the alphabet does not have at least 26 characters", () => {
        const alphabet = [ 1 ];
        const actual = substitution("Something", alphabet, true);
        expect(actual).to.be.false;
    });
    it("Should return false if there are reapeating characters in the alphabet.", () => {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];
        const actual = substitution("Something", alphabet, true);
        expect(actual).to.be.false;
    });
    it("Should encode a message properly and maintain spaces throughout.", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
    });
    it("Should decode a message properly.", () => {
        const actual =substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expected = 'message';
        expect(actual).to.equal(expected);
    });
})