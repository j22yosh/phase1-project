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
  const c = document.getElementById('card-image');
    c.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

}
//  Adds to select menu
function putOnSelect(poke) {
  const c = document.getElementById("card-title")
  const l = document.getElementById("pokemon-select");
  console.log(poke);
  poke.forEach((element) => {
    l.appendChild(createMenuItem(element));
  });
  //l.appendChild(createMenuItem(poke))
  l.addEventListener("change", (e) => {
    // debugger;
c.textContent = e.target.value
c.textContent = c.textContent.charAt(0).toUpperCase() + c.textContent.slice(1);
const p = document.getElementById('flavor')
const t = document.getElementById('type1')
const t2 = document.getElementById('type2')


fetch(`https://pokeapi.co/api/v2/pokemon/${c.textContent.toLowerCase()}`)
.then((res) => res.json())
.then((data) => {
  t.textContent = data.types[0].type.name
  t2.textContent = data.types[1].type.name})
  if(t2.textContent = undefined){
    t2.textContent = ""
  }

fetch (`https://pokeapi.co/api/v2/pokemon-species/${c.textContent.toLowerCase()}`)
.then ((res) => res.json())
.then((data) => p.textContent = data.flavor_text_entries[0].flavor_text)

  handleSelection(e.target.options[e.target.selectedIndex].dataset.url)
  });
  
}

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  .then((res) => res.json())
  .then((data) => putOnSelect(data.results));

const likeBtn = document.querySelector(".like__btn")
const likeIcon = document.querySelector("#icon")
const count = document.querySelector("#count")

let clicked = false

likeBtn.addEventListener("click", () =>{
  if(!clicked){
    clicked = true;
    likeIcon.innerHTML = `<i class="fa-solid fa-heart"></i>`
    count.textContent++

  }
  else{
    clicked = false;
    likeIcon.innerHTML = `<i class="fa-light fa-heart"></i>`
    count.textContent--
  }

})
  //stretch goals
  // put buttons on the dpad to cycle images
  //create data cards that can be liked/favorited
  // different backgrounds based on each type EXTRA STRETCH GOAL: color gradients for type combinations
  
  // 


