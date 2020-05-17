(function () {
  const API_KEY = 'AIzaSyCZENTwJq_...';
  const CHANEL_ID = 'chanelID';

  const renderVideos = (data) => {
    const container = document.getElementById('videos');
    const content = data.items
      .map((item) => {
        return `
      <figure>
        <img src="${item.snippet.thunmbnails.medium.url}" alt="text" >
        <figcaption>${item.snippet.description} </figcaption>
      </figure>
      <iframe .... />
      `;
      })
      .join('');

    container.innerHTML += content;
  };
  fetch(`adress`)
    .then((res) => res.json)
    .then((res) => renderVideos(res));
});
