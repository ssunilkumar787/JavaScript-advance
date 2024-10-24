


const API_URL = "https://api.github.com/users/ssunilkumar787"

async function promiseData() {

const data = await fetch(API_URL);
const jsonVal = await data.json()
console.log(jsonVal)

}

promiseData()


