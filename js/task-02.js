const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const createItemsArray = array => {
  return array.map(el => {
const item = document.createElement('li');
item.textContent = el;
item.classList.add('item');
return item})
};

const newList = createItemsArray(ingredients);

list.append(...newList);


