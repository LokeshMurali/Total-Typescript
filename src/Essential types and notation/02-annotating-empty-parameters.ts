import { Expect, Equal } from "@total-typescript/helpers";

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
const concatTwoStrings = (a:string, b:string)=>{
    return [a,b].join("");

};

//Tests
const result = concatTwoStrings("Hello", "World");
console.log(result);

type test = Expect<Equal<typeof result, string>>;