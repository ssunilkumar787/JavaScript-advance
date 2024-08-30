
// Closure
function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    y()
}

x()


function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    return y;
}

const z = x()

console.log(z)

z()// 7


function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    a=100;
    return y;
}

const z = x()

console.log(z)

z()// 100

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b)
        }
        y()
    }
    x()
}
z()



