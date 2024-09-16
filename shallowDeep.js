let originalArray = [[1, 2, 3], [4, 5, 6]]

let shallowCopiedArray = [...originalArray]; // shallow copy

shallowCopiedArray[0][0] = 100


console.log(originalArray)
console.log(shallowCopiedArray)

let originalObject = { a: 1, b:2, c: 3}
let shallowCopiedObject = Object.assign({}, originalObject)

shallowCopiedObject.b = 10;

console.log(originalObject)
console.log(shallowCopiedObject)