"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Problem
/*
const concatName = (first:string, last:string)=>{
    if(!last){
        return first;
    }

    return `${first} ${last}`;
};

const result = concatName("John", "Doe");
console.log(result)
const result2 = concatName("John");
*/
//Solution
const concatName = (first, last) => {
    if (!last) {
        return first;
    }
    return `${first} ${last}`;
};
const result = concatName("John", "Doe");
console.log(result);
const result2 = concatName("John");
console.log(result2);
