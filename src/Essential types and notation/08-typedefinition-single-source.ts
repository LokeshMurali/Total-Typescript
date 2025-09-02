import { expect, it } from "vitest";

//Problem
/*
const getRectangleArea = (rectangle:{width: number, height: number})=>{
    return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle:{width: number, height: number})=>{
    return 2 * (rectangle.width + rectangle.height);
};

//tests
it("should return the area of a rectange", ()=>{
    const result = getRectangleArea({
        width: 10,
        height: 20
    });
    expect(result).toEqual(200);
});

it("should return the perimeter of a rectangle", ()=>{
   const result = getRectanglePerimeter({
        width: 10,
        height: 20
    });
    expect(result).toEqual(60);
});
*/

//Solution
type Rectangle ={
    width: number,
    height: number
}

const getRectangleArea = (rectangle: Rectangle)=>{
    return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: Rectangle)=>{
    return 2 * (rectangle.width + rectangle.height);
};

//tests
it("should return the area of a rectange", ()=>{
    const result = getRectangleArea({
        width: 10,
        height: 20
    });
    expect(result).toEqual(200);
});

it("should return the perimeter of a rectangle", ()=>{
   const result = getRectanglePerimeter({
        width: 10,
        height: 20
    });
    expect(result).toEqual(60);
});