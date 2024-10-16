let name1 = {
    name: 'Sunil'
}

let printMyName = function (age, team) {
    console.log(`${this.name} and ${age} and ${team}`)

}

let printBind = printMyName.bind(name1, 34)

printBind('rcb')


Function.prototype.myBind = function (obj = {}, ...args1) {
    if(typeof this !== 'function') {
        throw new Error('Not callable')
    }

    obj.fn = this;

    return function (...args2) {
           obj.fn(...args1, ...args2)
    }
}

let bindMethodRef = printMyName.myBind(name1, 24)

bindMethodRef('ram')


