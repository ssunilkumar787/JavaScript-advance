let name = {
    firstName: 'Sunil',
    lastName: "Sharma"
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " , " + hometown + " , " + state)
}

let printMyName = printFullName.bind(name, 'Darbhanga')
printMyName('Bihar')


Function.prototype.myBind = function (...args) {
    let obj = this;
    params = args.slice(1)
     return function (...args2) {
        obj.apply(args[0], [...params,...args2])
     }
}

let printMyName2 = printFullName.myBind(name, 'Darbhanga')
printMyName2('Bihar')