import {
  filterByType,
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  //percentagePerFilter,
} from "./data.js";
import { startPageHome, startPageFilters } from "./js/start-page.js";
import { clearInputName, clearInputCheckbox } from "./js/clear-form.js";
import data from "./data/pokemon/pokemon.js";

let pokemons = data.pokemon;
var formCheckType = document.forms.formFilters.elements.type;
var formCheckWeakness = document.forms.formFilters.elements.weakness;
let resultsType = "";
let resultsWeakness = "";
let resultName = "";
//const selectOrder = document.getElementById("order-selector").addEventListener("change", orderToShow);
//const selectOrderByWeakness = document.getElementById("calculation-selector").addEventListener("change", showInOrderOfWeakness);
//const percentage = document.getElementById("quantify-text");

startSiteOnpokemon();
/*
  Fazer filtragem pelo nome
  Receber somente um envio de formulário
*/

function startSiteOnpokemon() {
  let url = Array.from(location.href).join();
  url = url.replace(/\W/g, "");
  url = url.includes("filters");
  if (url === true) {
    startPageFilters();
  } else {
    let containerMain = document.querySelector(".main-home");
    containerMain.style.height = "";
    startPageHome();
  }
}

export let searchNamePokemon = (e) => {
  e.preventDefault();
  let name = document.getElementById("name-pokemon").value;
  resultName = name.replace(/[^a-z^A-Z^à-ú^À-Ú]/g, "");
  //fazer filtro

  showResults();
  clearInputName();
};

export let formCheckbox = (e) => {
  e.preventDefault();
  for (let i = 0; i < formCheckType.length; i++) {
    if (formCheckType[i].checked) {
      resultsType += formCheckType[i].value + " ";
    }
    if (formCheckWeakness[i].checked) {
      resultsWeakness += formCheckWeakness[i].value + " ";
    }
  }
  showResults();
  clearInputCheckbox();
};

//Arrumar
function showResults() {
  if (resultsType != "" || resultsWeakness != "") {
    resultsType = resultsType.split(" ");
    resultsType.pop();
    resultsWeakness = resultsWeakness.split(" ");
    resultsWeakness.pop();
    clearInputCheckbox();
  }

  
    //Passar para cada type a função resultsType
    for (let i = 0; i < resultsType.length; i++) {
      activeFilterType(resultsType[i]);
      //showPercentagePerFilter();
    }


  addButton();
  createCards(pokemons);
  console.log(resultName);
  console.log(resultsType);
  console.log(resultsWeakness);
  resultsType = "";
  resultsWeakness = "";
}

//Arrumar funções de filtro

//Está entrando nas duas funções
function activeFilterType(valueType) {
  pokemons = filterByType(pokemons, valueType);
  createCards(pokemons);
}

function filterByType(data, activeFilter) {
  //passou uma função de dentro do filter, retornando todos os valores de filter
  return data.filter((item) => {
    //retorna para filter
    return item.type.includes(activeFilter);
  });
}

/*
function activeFilterWeakness(selectedValue) {
  console.log("Entrou na função filter weak");
  pokemons = filterByWeakness(pokemons, selectedValue);
  createCards(pokemons);
  //Como já tem criado os cards, não passa nada
  createColors();
  console.log("Saiu na função filter weak");
}
function orderToShow() {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
}
function showInOrderOfWeakness() {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
}
*/
/*
//Arrumar
function showPercentagePerFilter() {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`;
}
*/

function addButton() {
  document.getElementById("show-the-cards").innerHTML = `
  <a href="filters.html">
    <button type="button" id="back-button" class="back-button">
      &#8634;
    </button>
  </a>;
`;
}

function createCards(data) {
  document.getElementsByClassName("result-cards").innerHTML = data
    .map((item) => {
      return `
      <div class="card">
        <img class="pokedex-open" src="img/pokedex-open.png">
        <p class="poke-number">${item.num}</p>
        <div class="card-box">
          <figure class="box-poke-img">
            <img class="poke-img" src="${item.img}" alt=${item.name}>
          </figure>
          <main class="box-poke-text">
            <h4 class="poke-title"> 
              ${item.name[0].toUpperCase() + item.name.substr(1)}
            </h4>
            <ul class="poke-items">
              <span class="poke-item-title">Tipo:</span>
              <div class="items">
                ${item.type}
              </div>
            </ul>
            <ul class="poke-items">
              <span class="poke-item-title">Fraqueza:</span> 
              <div class="items">
                ${item.weaknesses}
              </div>
            </ul>
          </main>
        </div>
      </div>
      `;
    })
    .join("");
}

// Arrumar
function createColors() {
  let items = document.querySelectorAll(".items");
  itemsType = Array.from(itemsType);

  for (let i = 0; i <= items.length; i++) {
    let li = document.createElement("li");
    let value = document.createTextNode(items[i]);

    for (let j = 0; j <= itemsType.length; j++) {
      li.appendChild(value);
      items.appendChild(li);

      switch (itemsType[i]) {
        case "bug":
          list.style.backgroundColor = rgb(158, 191, 63);
          break;
        case "dark":
          list.style.backgroundColor = rgb(93, 96, 109);
          break;
        case "dragon":
          list.style.backgroundColor = rgb(21, 116, 196);
          break;
        case "electric":
          list.style.backgroundColor = rgb(238, 212, 79);
          break;
        case "fairy":
          list.style.backgroundColor = rgb(237, 153, 229);
          break;
        case "fight":
          list.style.backgroundColor = rgb(215, 68, 86);
          break;
        case "fire":
          list.style.backgroundColor = rgb(224, 164, 86);
          break;
        case "flying":
          list.style.backgroundColor = rgb(156, 180, 230);
          break;
        case "ghost":
          list.style.backgroundColor = rgb(107, 114, 196);
          break;
        case "grass":
          list.style.backgroundColor = rgb(98, 190, 101);
          break;
        case "ground":
          list.style.backgroundColor = rgb(214, 133, 91);
          break;
        case "ice":
          list.style.backgroundColor = rgb(129, 212, 201);
          break;
        case "normal":
          list.style.backgroundColor = rgb(154, 158, 163);
          break;
        case "poison":
          list.style.backgroundColor = rgb(180, 103, 202);
          break;
        case "psychic":
          list.style.backgroundColor = rgb(247, 124, 124);
          break;
        case "rock":
          list.style.backgroundColor = rgb(205, 192, 144);
          break;
        case "stell":
          list.style.backgroundColor = rgb(89, 150, 163);
          break;
        case "water":
          list.style.backgroundColor = rgb(88, 159, 222);
          break;
      }
    }
  }
}

let pokemons = data.pokemon;

function createCards(data) {
  document.getElementById("result-cards").innerHTML = data.map((item) => {
    return  `
    <div class="card">
      <img class="pokedex-open" src="img/pokedex-open.png">
      <p class="poke-number">${item.num}</p>

      <div class="card-box">
        <figure class="box-poke-img">
          <img class="poke-img" src="${item.img}" alt=${item.name}>
        </figure>

        <main class="box-poke-text">
          <h4 class="poke-title"> ${item.name[0].toUpperCase() + item.name.substr(1)}</h4>
          <ul class="poke-items">
            <span class="poke-item-title">Tipo: ${item.type}</span>
          </ul>

          <ul class="poke-items">
            <span class="poke-item-title">Fraqueza:
              <li>${item.weaknesses}</li>
            </span>  
          </ul>
        </main>
      </div>
    </div>
    `})
  .join("");
}

//html
const selectOrder = document.getElementById("order-selector");
const confirmButton = document.getElementById("confirm-button");
const selectOrderByWeakness = document.getElementById("calculation-selector");
const percentage = document.getElementById("quantify-text");
const checkboxTypeSelected = document.querySelectorAll("input[name=type]");
const checkboxWeaknessSelected = document.querySelectorAll("input[name=weakness]");

function showResults () {
  createCards(pokemons)
}

confirmButton.addEventListener("click", showResults);

//função que pega o valor do checkbox e chama a função de filtros = type
function activeFilterType(e) {
  const selectedValue = e.target.value;
  pokemons = filterByType(pokemons, selectedValue);
  createCards(pokemons)
}

//loop para ouvir todos os checkboxes name=type
for (let i = 0; i < checkboxTypeSelected.length; i++) {
  checkboxTypeSelected[i].addEventListener("click", activeFilterType)
  checkboxTypeSelected[i].addEventListener("click", showPercentagePerFilter)
}

//função que pega o valor do checkbox e chama a função de filtros = weakness
function activeFilterWeakness(e) {
  const selectedValue = e.target.value;
  pokemons = filterByWeakness(pokemons, selectedValue);
  createCards(pokemons);
}

//loop para ouvir todos os checkboxes name=weakness
for (let i = 0; i < checkboxWeaknessSelected.length; i++) {
  checkboxWeaknessSelected[i].addEventListener("click", activeFilterWeakness)
  checkboxWeaknessSelected[i].addEventListener("click", showPercentagePerFilter)
}

//ordenar ordem alfabetica
function orderToShow() {
  pokemons = alphabeticOrder(pokemons, selectOrder.value);
  createCards(pokemons);
}

selectOrder.addEventListener("change", orderToShow);

//ordenar por quantidade de fraquezas
function showInOrderOfWeakness () {
  pokemons = orderOfWeakness(pokemons, selectOrderByWeakness.value);
  createCards(pokemons);
}

selectOrderByWeakness.addEventListener("change", showInOrderOfWeakness);

function showPercentagePerFilter () {
  const showThePercentage = percentagePerFilter(pokemons, pokemons.length);
  percentage.innerHTML = `Esse filtro representa ${showThePercentage}% do total de Pokemons.`
}

