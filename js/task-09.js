function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const colorNameEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

const handlerBodyColorChange = () => {
  colorNameEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorNameEl.textContent;
  
};

buttonEl.addEventListener('click', handlerBodyColorChange);
