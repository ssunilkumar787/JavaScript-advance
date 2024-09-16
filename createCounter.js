const createCounter = (n) => {
  return counter = () => {
       return n++
    }
    
    
}

const output = createCounter(5);
console.log(output())
console.log(output())
console.log(output())
console.log(output())