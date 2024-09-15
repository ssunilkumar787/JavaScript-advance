'use strict'

// this in global space

console.log(this); // global object - (window, global depends on javascript runtime env)

function x () {
    // the value depends on strict / no strict mode
    console.log(this)
}


// this inside non - strict - (this substitution)

// if if the value if this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in the non strict mode

// this keyword value depends on how the function  is called (window)

x() // undefined
window.x() // window


// this inside a object's method

const student = {
    name: 'Sunil',
    printName: function () {
        console.log(this.name)
    }
}

const student2 = {
    name: 'Anmol'
}

student.printName();

student.printName.call(student2)


// this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this) // window
    }
}
obj.x()

// this inside nested arrow function

const obj2 = {
   a: 10,
   x: function () {
    // enclosing lexical context
    const y = () => {
        console.log(this)
    }
    y()
   }
}
obj2.x()

// this inside DOM elements => reference to HTML element

