"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
//Problem
/*
const concatName = (first:string, last?:string)=>{
    if(!last){
        return first;
    }

    return `${first} ${last}`;
};

it("should return the full name", ()=>{
    const result = concatName("John", "Doe");
    expect(result).toEqual("John Doe");
});

it("should return the first name", ()=>{
    const result2 = concatName("John");
    expect(result2).toEqual("John Pocock")
}); */
//Solution
const concatName = (first, last = "Pocock") => {
    return `${first} ${last}`;
};
(0, vitest_1.it)("should return the full name", () => {
    const result = concatName("John", "Doe");
    (0, vitest_1.expect)(result).toEqual("John Doe");
});
(0, vitest_1.it)("should return the first name", () => {
    const result2 = concatName("John");
    (0, vitest_1.expect)(result2).toEqual("John Pocock");
});
