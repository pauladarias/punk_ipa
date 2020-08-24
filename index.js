const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
  const beerPromise = await fetch(urlBase);
  const beersJson = await beerPromise.json();
  console.log(beersJson);

  const beersDiv = document.querySelector(".beers");

  let html = "";

  beersJson.forEach((beer) => {
    html += `
    <div class="beer-wrapper card">
      <div class="beer">
        <img class="beer__img" src=${beer.image_url}
        <h3> ${beer.name} </h3>
        <span class="beer__info">
          <span>ABV: ${beer.abv}%</span>
          <span>IBU: ${beer.ibu}</span>
        </span>
        </div>  
    </div>




   `;
  });

  beersDiv.innerHTML = html;
}

getBeers();
