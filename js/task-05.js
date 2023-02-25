const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handlerInputTextToOutput = () => {
    if(inputEl.value.length === 0) {
return outputEl.textContent = "Anonymous";
    }
    return outputEl.textContent = inputEl.value;
};

inputEl.addEventListener('input', handlerInputTextToOutput);

