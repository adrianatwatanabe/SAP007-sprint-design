let optionAlphabeticOrder = "";
let arrayAlphabeticOrder = [];
let optionFilterBy = [];
let arrayFilterBy = [];
let optionFilterRarity = "";
let arrayFilterRarity = [];
let optionOrderOfWeakness = "";
let arrayOrderOfWeakness = [];

/*
const filtersResult = (data, selectedOption) => {
  let arrayDataPokemon = [];
  if (optionAlphabeticOrder) {
    //ele sempre tem uma opção default
    arrayDataPokemon = alphabeticOrder();
  }
  if (optionFilterBy !== ""){
    filterBy()
  }
  if (optionFilterRarity !== ""){
    filterRarity();
  }
  if (optionOrderOfWeakness !== "") {
    orderOfWeakness();
  }
};
*/

export const alphabeticOrder = (data, selectedOption) => {
  optionAlphabeticOrder = selectedOption;
  /* default option */
  if (selectedOption === "number") {
    arrayAlphabeticOrder = data.sort((a, b) => (a.num > b.num ? 1 : -1));
    return arrayAlphabeticOrder;
  }
  if (selectedOption === "name-az") {
    arrayAlphabeticOrder = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    return arrayAlphabeticOrder;
  }
  if (selectedOption === "name-za") {
    arrayAlphabeticOrder = data.sort((a, b) => (a.name > b.name ? -1 : 1));
    return arrayAlphabeticOrder;
  }
};

export const filterBy = (data, selectedValueTypeOrWeakness, selectedValueAttribute) => {
  optionFilterBy = [selectedValueTypeOrWeakness, selectedValueAttribute];
  switch (selectedValueTypeOrWeakness) {
    case "type":
      arrayFilterBy = data.filter((item) => {
        return item.type.includes(selectedValueAttribute);
      });
      return arrayFilterBy;
    case "weaknesses":
      arrayFilterBy = data.filter((item) => {
        return item.weaknesses.includes(selectedValueAttribute);
      });
      return arrayFilterBy;
    case "resistant":
      arrayFilterBy = data.filter((item) => {
        return item.resistant.includes(selectedValueAttribute);
      });
      return arrayFilterBy;
  }
};

export const filterRarity = (data, selectedOption) => {
  optionFilterRarity = selectedOption;
  arrayFilterRarity = data.filter((item) => {
    return item.rarity == selectedOption;
  });
  return arrayFilterRarity;
};

export const orderOfWeakness = (data, selectedOrder) => {
  optionOrderOfWeakness = selectedOrder;
  if (selectedOrder === "less-weakness") {
    arrayOrderOfWeakness = data.sort((a, b) =>
      a.weaknesses.length > b.weaknesses.length ? 1 : -1
    );
    return arrayOrderOfWeakness;
  } else if (selectedOrder === "more-weakness") {
    arrayOrderOfWeakness = data.sort((a, b) =>
      a.weaknesses.length > b.weaknesses.length ? -1 : 1
    );
    return arrayOrderOfWeakness;
  }
};

export const searchByName = (data, condition) => {
  const typedName = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(condition.toLowerCase())
  );
  return typedName;
};

export const percentagePerFilter = (resultOfFilters, totalOfPokemons) => {
  const percentageOfPokemons = (resultOfFilters / totalOfPokemons) * 100;
  const roundedNumber = Math.round(percentageOfPokemons * 100) / 100;
  return roundedNumber;
};
