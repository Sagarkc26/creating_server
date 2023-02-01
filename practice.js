a = 20;
b = 0;
let waitdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 30;
    resolve(b);
  }, 2000);
});
waitdata.then((data) => {
  b = data;
  console.log(a + b);
});
