import { expect, it } from "vitest";

//Problem
/*
const concatName = (user:{first: string, last: string})=>{
    if(!user.last){
        return `${user.first}`;
    }

    return `${user.first} ${user.last}`;
};

//Tests
it("should return the full name", ()=>{
    const result = concatName({
        first: "John",
        last: "Doe"
    });
    expect(result).toEqual("John Doe");
});

it("should only return the first name if last name is not provided", ()=>{
    const result = concatName({
        first: "John"
    });

    expect(result).toEqual("John");

});
*/

//Solution

const concatName = (user:{first: string, last?: string})=>{
    if(!user.last){
        return `${user.first}`;
    }

    return `${user.first} ${user.last}`;
};

//Tests
it("should return the full name", ()=>{
    const result = concatName({
        first: "John",
        last: "Doe"
    });
    expect(result).toEqual("John Doe");
});

it("should only return the first name if last name is not provided", ()=>{
    const result = concatName({
        first: "John"
    });

    expect(result).toEqual("John");

});