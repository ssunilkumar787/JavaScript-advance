const inputElement = document.querySelector("input");

const debounce = (fun, wait) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fun(...args);
    }, wait);
  };
};

const callApi = (e) => {
  console.log(e.target.value);
};

const debounceApiCall = debounce(callApi, 1000);

inputElement.addEventListener("input", debounceApiCall);
