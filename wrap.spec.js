const { expect } = require("chai");
const wrap = require("./wrap")

describe("wrap", () => {
    beforeEach('Setting up wrap function', function() {
        wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)
    })

    it("Returns empty string if empty string was provided", () => {
        expect(wrap("", 10)).to.equal("");
    });

    it("First parameter is a string", () => {
        expect(typeof line).to.be.an("string");
    });

    it("Second parameter is a number", () => {
        expect(typeof maxLen).to.be.an("Number")
    });

    // it("Line length is less than number", () => {
    //     expect(line < maxLen)
    // })
});

