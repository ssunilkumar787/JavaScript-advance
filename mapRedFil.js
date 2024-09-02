const arr = [5,1,3,2,6];

// suum 

const findSum = (arr) => {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

console.log(findSum(arr))

const output = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)

console.log(output)

// max

const findMax = (arr) => {
    let max = 0;
    for (let i=0; i< arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(findMax(arr))

const maxRed = arr.reduce((max, curr) => {
    if(curr > max) {
        max = curr
    }
    return max;
},0)

console.log(maxRed)


const users = [
    {firstname: 'Sunil', lastName: 'Sharma', age: 25},
    {firstname: 'Rahul', lastName: 'Jha', age: 75},
    {firstname: 'Elon', lastName: 'Musk', age: 50},
    {firstname: 'Deepika', lastName: 'Padukon', age: 26},

]

const ageCount = users.reduce((acc, curr) => {
     if(acc[curr.age]) {
        acc[curr.age] = ++ acc[curr.age]
     } else {
        acc[curr.age] = 1;
     }
     return acc;
},{})

console.log(ageCount)// {25: 1, 26: 1, 50: 1, 75: 1}

const firstNameLessThan30 = users.filter((item) => item.age < 30).map((val) => val.firstname)
console.log(firstNameLessThan30)

const firstNameReduce = users.reduce((acc, curr) => {
      if(curr.age < 30) {
        acc.push(curr.firstname);
      }
      return acc;
}, [])

console.log(firstNameReduce)