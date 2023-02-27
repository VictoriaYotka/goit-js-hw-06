const inputEl = document.querySelector('#validation-input');

const handlerInputValidation = () => {
    if(inputEl.value.length == inputEl.dataset.length) {  
        return inputEl.classList.add('valid');
    }
    
       return inputEl.classList.add('invalid'); 
};

inputEl.addEventListener('blur', handlerInputValidation);
