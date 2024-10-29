// 1. reverse each word

// let str = 'saare jaha se acha'

// let revStr = str.split(' ').map((word) => {
//     return word.split('').reverse().join('')
// })

// console.log(revStr.join(' '))

// 2. check if an object is an array or not

// function checkArray(el) {
//    return Array.isArray(el)
// }

// console.log(checkArray([]))


// 3. how to empty an array in js

// let arr = [1,2,3,4]
// arr.length = 0

// console.log(arr)


// 4. how to check if a number is integer or isInteger()

// function isInteger (num) {
//     if(num % 1 === 0) {
//         console.log('integer')
//     } else {
//         console.log("not integer")
//     }
// }

// console.log(isInteger(12))

// 5. make this work

// duplicate([1,2,3]); // [1,2,3,1,2,3]

// let arr = [1,2,3];

// console.log(arr.concat(arr))

// 6. reverse a number

// function reverseNum(num) {
//     return Number(num.toString().split('').reverse().join(''))
// }

// console.log(reverseNum(12))

// function revNum(num) {
//     let rev = 0;
//     while(num > 0) {
//         let rem = num % 10;
//         rev = rev * 10 + rem;
//         num = Math.floor(num / 10)
//     }
//     return rev
// }

// console.log(revNum(1234))

// 7. check palindrome

// function checkPalindrome(str) {
//     let reverseStr = str.split('').reverse().join('')

//     if(reverseStr === str) return true;
//     else return false
// }

// console.log(checkPalindrome('poop'))
// console.log(checkPalindrome('loop'))

//8. returns a passed string in alphabetical order

// let str = 'apple'

// console.log(str.split('').sort().join(''))

//9. converts first letter in Upper case

// function convertFirst(str) {
//       let allWords = str.split(' ').map((words) => {
//         return words.charAt(0).toUpperCase() + words.substring(1)
//       })

//       return allWords.join(' ')
// }

// console.log(convertFirst('hello ap kase ho'))


//11. get no of occurences of each letter in specified string

// function occ(str) {
//     let occurences = {}

//     str.split('').forEach((elem) => {
//         if(occurences.hasOwnProperty(elem) === false) {
//             occurences[elem] = 1;
//         } else {
//             occurences[elem]++;
//         }
//     })
//     return occurences
// }

// console.log(occ('apple'))

// 12. loop an array and add all members of it

// let arr = [1,2,3,4,5, 6]

// let sum = 0;

// arr.map((val) => {
//     sum = sum + val
// })

// console.log(sum)

// 13. In array of number and strings , add only those numbers which are not string

// let arr = ['a', 'b', 3,4,'w',6]

// let sum = arr.reduce((acc, curr) => {
//         if(typeof curr === 'number') {
//              acc = acc + curr
//         }

//         return acc
        
// },0)

// console.log(sum)

// 14. loop and Array of objects and remove all objects which dont have gender's value male.

// let arr = [
//     {name: 'Sunil', gender: 'male'},
//     {name: 'Anika', gender: 'female'},
//     {name: 'Ram', gender: 'notspecified'},
//     {name: 'Roshni', gender: 'female'},
//     {name: 'Annn', gender: 'Na'}
// ]

// let res = arr.filter((val) => {
//     return val.gender === 'male'
// })



// console.log(res)

// 15. clone an array

// let arr = [1,2,3]

// function cloneArr(arr) {
//     return [...arr]
// }
// const newArr = cloneArr(arr)

// console.log(newArr)

// 10. write a function , which accepts an argument and returns the typeof.
// there are six possibe values that typeof returns: Object, boolen, function, number,
// String, and undefined

// function typeTeller(args) {
//     console.log(typeof args)
// }
// typeTeller([])

// 16. write a js function to get the first elment of an array and last elment of an array


// function retrieve(arr, n=1) {
//     if(n <= arr.length) {
//         for(let i=0; i<n; i++) {
//             console.log(arr[i])
//          }
//     } else {
//         console.log('exceeded')
//     }
 
// }

// retrieve([1,2,3,4,5],5)

// function retrieve(arr, n=1) {
//     if(n <= arr.length) {
//         for(let i=0; i<n; i++) {
//             console.log(arr[arr.length - 1 - i])
//          }
//     } else {
//         console.log('exceeded')
//     }
 
// }

// retrieve([1,2,3,4,5],5)


// 17. find the most frequent item of an array


// let arr = [4,5,5,6, 88,100];

// function freqCount(arr) {
//     let obj = {}
//     arr.forEach((elem) => {
//         if(obj.hasOwnProperty(elem) === false) {
//             obj[elem] = 1
//         } else {
//            obj[elem]++;
//         }
//     })

//     console.log(obj)

//     let ans = Object.keys(obj).reduce((acc, curr) => {
//         return obj[acc] > obj[curr] ? acc : curr
//     })

//     console.log(ans)
// }

// freqCount(arr)

// 18. shuffle an array

// let shArr = [1,2,3,4,5]

// function shuffleArr(arr) {
//     let arrLength = shArr.length;

//     while(arrLength > 0) {
//         arrLength--;
//         let indexToBeChnaged = Math.floor(Math.random() * arrLength)
//         let temp = arr[arrLength]
//         arr[arrLength] = arr[indexToBeChnaged];
//         arr[indexToBeChnaged] = temp
       
//     }

//     console.log(arr)
// }

// shuffleArr(shArr)

// 19. union of two arrays

// function union(arr1, arr2) {
//     return [...new Set(arr1.concat(arr2))]
// }

// console.log(union([1,2,3,4,4,44,], [1,3,5,8]))









