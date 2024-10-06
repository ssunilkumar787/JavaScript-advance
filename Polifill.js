const arr = [1, 2,3,4,5]

// arr.forEach((el) => {
//     console.log(el)
// })



// forEach
// const printEle = (el, i, arr) => {
//     console.log(el, i, arr)
// }

// Array.prototype.myForEach = function (cb) {
  
//     for(let i=0; i<this.length; i++) {
//         cb(this[i], i, this)
//     }
// }

// arr.myForEach(printEle)

// map

// Array.prototype.myMap = function (cb) {
//     let res = [];

//     for(let i=0; i< this.length; i++) {
//         res.push(cb(this[i]))
//     }
//     return res;
// }

// const mapres = arr.myMap((el) => el*2)
// console.log(mapres)

// filter


// Array.prototype.myFilter = function (cb) {
//     let res = [];

//     for(let i=0; i<this.length; i++) {
//         if(cb(this[i])) {
//             res.push(this[i])
//         }
//     }
//     return res
// }

// let res = arr.myFilter((el) => el > 2)

// console.log(res)

// reduce


// let resRed = arr.reduce((acc, curr) => {
//     return acc + curr;
// },0)

// Array.prototype.myReduce = function (cb, intialVal) {
//    let acc = intialVal;
//    for(let i=0; i<this.length;i++) {
//      acc = acc ? cb(acc, this[i]) : this[i]
//    }
//    return acc;
// }

// let res = arr.myReduce((acc, curr) => {
//    return acc = acc + curr
// }, 0)

// console.log(res)



