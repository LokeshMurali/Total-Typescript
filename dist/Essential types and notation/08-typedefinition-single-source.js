"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const getRectangleArea = (rectangle) => {
    return rectangle.width * rectangle.height;
};
const getRectanglePerimeter = (rectangle) => {
    return 2 * (rectangle.width + rectangle.height);
};
//tests
(0, vitest_1.it)("should return the area of a rectange", () => {
    const result = getRectangleArea({
        width: 10,
        height: 20
    });
    (0, vitest_1.expect)(result).toEqual(200);
});
(0, vitest_1.it)("should return the perimeter of a rectangle", () => {
    const result = getRectanglePerimeter({
        width: 10,
        height: 20
    });
    (0, vitest_1.expect)(result).toEqual(60);
});
