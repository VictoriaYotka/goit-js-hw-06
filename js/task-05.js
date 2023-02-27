const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handlerInputTextToOutput = () => {
    if(inputEl.value.length === 0 || inputEl.value.trim() === '') {
return outputEl.textContent = "Anonymous";
    }
    return outputEl.textContent = inputEl.value.trim();
};

inputEl.addEventListener('input', handlerInputTextToOutput);

