const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 sucess");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 sucess");
    reject("p2 fail");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 sucess");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
