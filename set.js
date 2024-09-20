const mySet = new Set();

mySet.add(1)
mySet.add(2)

mySet.add(3)
mySet.add(4)
mySet.add(4)

mySet.delete(3)

const fullName = {
    name: 'Sunil',
    last: 'Sharma'
}

mySet.forEach(val => {
    console.log(val)
})

const arr = Array.from(mySet)


console.log(arr)
