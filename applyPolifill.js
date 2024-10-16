let name1 = {
    name: 'Sunil'
}

let printMyName = function (age, team) {
    console.log(`${this.name} and ${age} and ${team}`)
}


// printMyName.apply(name1, [23, 'rcb'])

Function.prototype.myApply = function (obj = {}, ...args) {
    if(typeof this !== 'function') {
        throw new Error('Not Callable')
    }
    if(!Array.isArray(...args)) {
        throw new Error('TypeError: CreateListFromArrayLike called on non-object')
    }

    obj.fn = this;

    obj.fn(...args)

    
}

printMyName.myApply(name1, [2], ['rcb'])
