const simpleFunction = async (data) => {
  if (data) {
    return 1234;
  } else {
    throw new Error('Error!!!');
  }
};

simpleFunction(1)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// async await
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }, 2000);
  });

const fn = async () => {
  const data = await asyncTimer();
  console.log(data);
};

fn();
