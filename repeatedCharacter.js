// // hello : h: 1 e: 1 l:2 o: 1

const repeatedCharacter = (string) => {
    let count = 1;
    for (let i=0; i<string.length; i++) {
        if(string[i] === string[i + 1]) {
            count ++;
        } else {
            console.log(`${string[i]}: ${count}`);
            count = 1
        }
    }

}
console.log(repeatedCharacter('hello'))


// const reverse = (string) => {
//     var result = '';

//     for (let i = string.length - 1; i >= 0 ; i--) {
//        result  = result + string[i]
//     }
//     return result
// }

// console.log(reverse('sunil'))
