import "../scss/app.scss";

const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const ul = document.querySelector("ul");
  
  fetch(url).then(res => res.json()
  .then(json => {
    console.log(json);

    for (let i = 0; i < 10; i++) {
      const li = document.createElement('li');
      
      li.innerText = json.results[i].name;
      ul.appendChild(li);
    }
  }));
});
