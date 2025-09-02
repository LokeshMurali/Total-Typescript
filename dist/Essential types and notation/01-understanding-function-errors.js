"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem
/*
//Code
const add = (a:boolean, b:boolean)=>{
    return a + b;

};

//Test
const result = add(1,2);
type test = Expect<Equal<typeof result, number>>;
*/
//Solution
//Code
const add = (a, b) => {
    return a + b;
};
//Test
const result = add(1, 2);
console.log(result);
