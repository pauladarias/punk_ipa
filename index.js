const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
  const beerPromise = await fetch(urlBase);
  const beersJson = await beerPromise.json();

  const beersDiv = document.querySelector(".beers");

  let html = "";

  beersJson.forEach((beer) => {
    const name = beer.name;

    html += `
     <div class="beers">
     <h4> ${name} </h4>
     </div>
   `;
  });

  beersDiv.innerHTML = html;
}

getBeers();
