// const x = () => {
//    for(let i=1; i<=5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },i * 1000)
//    }
// }
// x()

// const x = () => {
//   for (var i = 1; i <= 5; i++) {
//     const close = (i) => {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     };
//     close(i)
//   }
  
// };
// x()

console.log('start')

setTimeout(() => {
    console.log('callback')
},0)

console.log('end')

// let startDate = new Date().getTime()
// let endDate = startDate;

// while(endDate < startDate + 10000) {
//     endDate = new Date().getTime()
// }
// console.log('while expires')
