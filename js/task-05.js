const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handlerInputTextToOutput = (event) => {
    if(event.currentTarget.value.length === 0 || event.currentTarget.value.trim() === '') {
return outputEl.textContent = "Anonymous";
    }
    return outputEl.textContent = inputEl.value.trim();
};

inputEl.addEventListener('input', handlerInputTextToOutput);

