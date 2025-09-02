import { expect, it } from "vitest";

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
const concatName = (first: string, last = "Pocock") => {
    return `${first} ${last}`;
};

it("should return the full name", () => {
    const result = concatName("John", "Doe");
    expect(result).toEqual("John Doe");
});

it("should return the first name", () => {
    const result2 = concatName("John");
    expect(result2).toEqual("John Pocock")
});