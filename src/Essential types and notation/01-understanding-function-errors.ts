import { Expect, Equal } from "@total-typescript/helpers";

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
const add = (a:number, b:number) => {
    return a + b;
};

//Test
const result = add(1,2);
console.log(result);

type test = Expect<Equal<typeof result, number>>;