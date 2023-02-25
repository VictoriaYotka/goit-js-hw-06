const valueEl = document.querySelector('#value');
const decrementBtn = valueEl.previousElementSibling;
const incrementBtn = valueEl.nextElementSibling;

let counterValue = 0;

const handlerDecrementClick = () => {counterValue -= 1;
    valueEl.textContent = counterValue;};

const handlerIncrementClick = () => {counterValue += 1;
    valueEl.textContent = counterValue;};

decrementBtn.addEventListener('click', handlerDecrementClick);
incrementBtn.addEventListener('click', handlerIncrementClick);
