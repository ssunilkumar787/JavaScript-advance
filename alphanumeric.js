const characters = 'ABCDEFGHIKLMNOPQRSTUVWXYXabcdefghiklmnopqrstuvwxyz';

const generateNumber = (number) => {
    let result = '';

    let characterLength = characters.length;

    for (let i=0; i < number; i++) {
        result  = result + characters.charAt(Math.floor(Math.random() * characterLength))
    }
    return result;
}

console.log(generateNumber(5))

