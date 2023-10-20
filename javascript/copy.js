// 1. shallow copy, 얕은 복사
console.log("----- shallow copy -----\n");

// 1-1. 1단계 복사
// 객체를 프로퍼티 값으로 갖는 객체의 경우, 한단계까지만 복사

const objectA = { x: { y: 1 } };
const objectBOne = { ...objectA };

console.log("1단계 복사 : 객체 중첩\n");
console.log("objectA === objectBOne", objectA === objectBOne); // false
console.log("objectA === objectBOne", objectA === objectBOne); // false
console.log("objectA.x === objectBOne.x", objectA.x === objectBOne.x); // true
console.log("\n");

// 1-2. pass by reference, 참조에 의한 전달
// 객체의 참조값을 복사한다.

const objectC = { x: 1 };
const objectD = objectC;

console.log("참조에 의한 전달 : 객체\n");
console.log("objectC === objectD", objectC === objectD); // true
console.log("\n");

// 2. deep copy, 깊은 복사
console.log("----- deep copy -----\n");

// 2-1. 전부 복사
// 객체에 중첩되어 있는 객체까지 모두 복사
const _ = require("lodash");

const objectBTwo = _.cloneDeep(objectA);

console.log("전부 복사 : 객체 중첩\n");
console.log("objectA === objectBTwo", objectA === objectBTwo); // false
console.log("objectA.x === objectBTwo.x", objectA.x === objectBTwo.x); // false
console.log("\n");

// 2-2. pass by value, 값에 의한 전달 -> 단, JavaScript에 100% 적용될 수 있는 표현은 아님.
// primitive type

let primitiveA = "원본";
let primitiveB = primitiveA; // primitiveA와 값은 같으나 서로 다른 메모리 공간을 바라본다. (or 같은 곳을 바라볼 수 도 있다.)

primitiveA = "수정"; // primitiveA는 다른 값이 저장된 주소를 바라보고 있다

console.log("값에 의한 전달 : 원시 타입\n");
console.log("primitiveB,", primitiveB); // 원본
console.log("primitiveA = primitiveB,", primitiveA === primitiveB); // false

primitiveB = "수정"; // primitiveA와 값은 같으나 서로 다른 메모리 공간을 바라본다. (or 같은 곳을 바라볼 수 도 있다.)

console.log("primitiveB,", primitiveB); // 수정
console.log("primitiveA = primitiveB,", primitiveA === primitiveB); // true
