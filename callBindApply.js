let name = {
    firstName: 'Sunil', 
    lastName: 'Sharma'
}
let name2 = {
    firstName: 'Rahul',
    lastName: 'Sharma'
}

let printFullName = function (hometown, state) {
console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state)
}

// function borrowing 

//call
printFullName.call(name, 'Dearbhnaga', 'Bihar');
printFullName.call(name2, 'Bangalore', 'karnataka');

//apply

printFullName.apply(name, ['patan', 'Bihar'])

// bind - its gives a copy and call later

let printMyName = printFullName.bind(name, 'Mumbai', 'Maharastra');

printMyName()