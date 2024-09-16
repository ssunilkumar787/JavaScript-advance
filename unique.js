// find unique charecter
// const uniqueCharacter = (string) => {
//     let result = '';

//     for (let i=0; i< string.length; i++) {
//         if(result.indexOf(string[i]) < 0) {
//             result+=string[i]
//         }
//     }
//     return result;
// }

// console.log(uniqueCharacter('abbbbbc'))

//even or odd

// const evenOdd = (n) => {
//     const eo = ['even', 'odd'];

//     const res = n%2;

//     console.log(eo[res])
// }
// evenOdd(5)

// const arr = [1,3,1,5,5,1,3,7,1,1,1];

// const s = {};

// arr.map((val) => {
//     s[val] = s[val] + 1 || 1;
// })

// let k = Object.keys(s)

// console.log(s , k)

// let res = 0;

// k.map((item) => {
//     if(res < item)  {
//         res = item;
//     }
// })
// console.log(res)

const curry = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(curry(2)(3)(1))



