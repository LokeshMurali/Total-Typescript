import { expect, it } from "vitest";

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
const concatName = (user: {first: string, last: string })=>{
    return `${user.first} ${user.last}`;
};

it("should return the full name", ()=>{
    const result = concatName({
        first: "John",
        last: "Doe"
    });

    expect(result).toEqual("John Doe");
})