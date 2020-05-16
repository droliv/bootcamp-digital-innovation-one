fetch('http://address').then((resp) => {
  resp.json().then((data) => {
    console.log(data);
  });
});
