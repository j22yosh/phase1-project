//DOM render functions
function createMenuItem(name) {
  console.log(name);
  let op = document.createElement("option");
  op.textContent = name.name;
  op.dataset.url = name.url;
  return op;
}
function handleSelection(url){
  console.log(url)
  const id = url.split('/')[6]
  const pokemonImage = document.getElementById('pokemon-image')
  pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)

}
//  Adds to select menu
function putOnSelect(poke) {
  const l = document.getElementById("pokemon-select");
  console.log(poke);
  poke.forEach((element) => {
    l.appendChild(createMenuItem(element));
  });
  //l.appendChild(createMenuItem(poke))
  l.addEventListener("change", (e) => {
    // debugger;
    
  handleSelection(e.target.options[e.target.selectedIndex].dataset.url)
  });
}

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((res) => res.json())
  .then((data) => putOnSelect(data.results));
