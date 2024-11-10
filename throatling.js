const inputElement = document.querySelector("input");
const span = document.querySelector("h2 span");

function throattle(fun, delay = 100) {
  let timerId = null;
  let lastArgs = [];
  let firstCall = true;
  let context = null;

  return function (...args) {
    context = this;
    lastArgs = args;

    if (firstCall) {
      fun.apply(context, lastArgs);
      firstCall = false;
      return;
    }

    if (timerId) return;
    timerId = setTimeout(() => {
      timerId = null;
      fun.apply(context, lastArgs);
    }, delay);
  };
}
const callApi = (value) => {
  console.log(this);
  console.log(value);
};
const searchInput = throattle(callApi, 1000);

inputElement.addEventListener("input", (e) => {
  searchInput.call({ name: "Sunil" }, e.target.value);
});

// function throattle(fun, delay = 100) {
//   let timerId = null;
//   return function (...args) {
//     if (timerId) return;
//     timerId = setTimeout(() => {
//       timerId = null;
//       fun(...args);
//     }, delay);
//   };
// }

// const count = () => {
//   span.innerHTML = ++span.innerHTML;
// };

// const moveMouse = throattle(count, 200);

// document.addEventListener("mousemove", () => {
//   moveMouse();
// });
