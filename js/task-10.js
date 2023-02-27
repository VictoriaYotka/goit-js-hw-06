function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');
const inputEls = document.querySelector('#controls');
const inputNumberEl = inputEls.children[0];
const createBtnEl = inputEls.children[1];
const destroyBtnEl = inputEls.children[2];


const getBiggerBoxWidth = () => {
  let boxWidth = 30;
   
  return function () {
    return boxWidth += 10;
  };
};

const getBiggerBoxHeight = () => {
  let boxHeight = 30;
   
  return function () {
    return boxHeight += 10;
  };
};


const createBoxes = () => {

const increaseInnerBoxWidth = getBiggerBoxWidth();
const increaseInnerBoxHeight = getBiggerBoxHeight();


  boxesEl.innerHTML = '';

  const boxesElInnerMarkup = [];

  for (let i = 0; i < inputNumberEl.value; i += 1) {

    const innerBox = document.createElement('div');

    innerBox.style.backgroundColor = getRandomHexColor();
    innerBox.style.width = `${increaseInnerBoxWidth()}px`;
    innerBox.style.height = `${increaseInnerBoxHeight()}px`;

    boxesElInnerMarkup.push(innerBox);    
  }

  return boxesEl.append(...boxesElInnerMarkup);
};


const handlerCreateBoxes = () => {
  createBoxes();
};

const handlerDestroyBoxes = () => {
  boxesEl.innerHTML = '';
  inputNumberEl.value = '';
};


createBtnEl.addEventListener('click', handlerCreateBoxes);
destroyBtnEl.addEventListener('click', handlerDestroyBoxes);
