

let object = {
    name: "sunil", 
    city: "Darbhanga",
    getIntro: function () {
        console.log(this.name + " " + "from" + " " + this.city)
    }
}

let object2 = {
    name: "Aditya",
    city: "Hydrabad"
}

// never do this in your regular code
object2.__proto__= object;



Function.prototype.mybind = function () {
    console.log('my bind')
}

function fun() {
  
}

