// function doSomething(callback) {
//   setTimeout(() => {
//     callback('first data');
//   }, 1000);
// }

// function doOtherThing(callback) {
//   setTimeout(() => {
//     callback('second data');
//   }, 1000);
// }

// function doAll() {
//   doSomething((data) => {
//     console.log(data.split(''));
//   });
//   doOtherThing((data) => {
//     console.log(data.split(''));
//   });
// }

// doAll();

// Promises

const myPromise = new Promise((resolve, reject) => {});

const doSomething1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first data');
  }, 1000);
});

doSomething1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('error!!!');
  });

// status peding, fullfilled, rejected

// promise all executa todas as promises
// promise race retorna a priimeira promise que for resolvida.
