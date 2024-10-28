

// Traverse 

// 1. parentNode

// const heading = document.querySelector('#heading')
// const parent = heading.parentNode;

// console.log(parent)

//2. childNodes

// const parent = document.querySelector('.parent')
// const headingChild = parent.childNodes;
// console.log(headingChild)

//3. nextElementSibling

// const heading = document.querySelector('.heading')
// console.log(heading.nextElementSibling)


// previousElementSibling
// const subHeading = document.querySelector('h3')
// console.log(subHeading.previousElementSibling)

//Manupulation

// innerHTML
// style

// const heading = document.querySelector('.heading')
// heading.innerHTML = 'Web dev is aws';
// heading.style.color = 'red'
// heading.style.fontSize = '100px';
// heading.classList.add('title');
// heading.classList.remove('heading')

// console.log(heading)

// create elements

// const heading = document.createElement('h1')
// heading.innerHTML = 'JavaScript is awesome'

// const parent = document.querySelector('.parent')
// parent.appendChild(heading)

// const subHeading = document.createElement('h3')
// subHeading.innerHTML= 'sub heading'

// heading.insertAdjacentElement('beforebegin', subHeading)

// console.log(object)

// DOM events

// const heading = document.querySelector('.heading')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', function () {
//   heading.style.color = 'purple'
// })


// The Document Object Model (DOM) is a programming interface that represents a web page's structure as a logical tree of nodes and objects