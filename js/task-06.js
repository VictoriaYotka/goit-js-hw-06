const inputEl = document.querySelector('#validation-input');

const handlerInputValidation = () => {
    if(inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.add('invalid');
        return;
    }

    if(inputEl.value.length >= inputEl.dataset.length) {
        inputEl.classList.add('valid');
        return;
    }  
};

inputEl.addEventListener('blur', handlerInputValidation);