"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem
/*
//Code
const concatTwoStrings = (a, b)=>{
    return [a,b].join("");

};

//Tests
const result = concatTwoStrings("Hello", "World");

type test = Expect<Equal<typeof result, string>>;
*/
//Solution
//Code
const concatTwoStrings = (a, b) => {
    return [a, b].join("");
};
//Tests
const result = concatTwoStrings("Hello", "World");
console.log(result);
