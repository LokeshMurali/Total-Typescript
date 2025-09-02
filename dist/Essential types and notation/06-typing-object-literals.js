"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
//Problem
/*
const concatName = (user)=>{
    return `${user.first} ${user.last}`;
};

it("should return the full name", ()=>{
    const result = concatName({
        first: "John",
        last: "Doe"
    });

    expect(result).toEqual("John Doe");
})
    */
//Solution
const concatName = (user) => {
    return `${user.first} ${user.last}`;
};
(0, vitest_1.it)("should return the full name", () => {
    const result = concatName({
        first: "John",
        last: "Doe"
    });
    (0, vitest_1.expect)(result).toEqual("John Doe");
});
