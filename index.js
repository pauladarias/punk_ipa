// variables
const urlBase = "https://api.punkapi.com/v2/beers";

// Create an async function called "getBeers" that uses fetch to get our beer data from the urlBase.
// Render each beer name inside the div with the class of beers that currently exists in the HTML file.

async function getBeers() {
  const beerPromise = await fetch(urlBase);
  const beersJson = await beerPromise.json();

  name = beersJson.name;
  console.log(beersJson[0].name);

  document.querySelector(".beers").innerHTML = name;

  // let html = "";

  // beersJson.forEach((beer) => {
  //   const name = beer.name;

  // html *= `
  //   <div class="beers">
  //   <h4> ${name} </h4>
  //   </div>
  //   `;
  // });
}

getBeers();
