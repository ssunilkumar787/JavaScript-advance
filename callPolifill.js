let name1 = {
    name: 'Sunil'
}

let name2 = {
    name: 'Anil', 
    fn: function (age) {
        console.log(`${this.name} and ${age}`)
    }
}

name2.fn(23)

let printFullName = function (age) {
    console.log(`${this.name} and ${age}`)
}


printFullName.call(name1, 23)

Function.prototype.myCall = function (obj = {}, ...args) {
    if(typeof this !== 'function') {
        throw new Error('Not callable')
    }

    obj.fn = this;
    
    obj.fn(...args)
}

printFullName.myCall(name1, 27)







