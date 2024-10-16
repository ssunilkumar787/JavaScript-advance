document.querySelector('#grandparent')
.addEventListener('click', () => {
    console.log('grand parent clicked')
}, false) // bubbling

document.querySelector('#parent')
.addEventListener('click', () => {
    console.log('parent clicked')
}, false) // bubbling

document.querySelector('#child')
.addEventListener('click', (e) => {
    console.log('child clicked')
   e.stopPropagation()
}, true) // capturing