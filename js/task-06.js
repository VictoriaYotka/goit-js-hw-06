const inputEl = document.querySelector('#validation-input');

const handlerInputBlurValidation = (event) => {

    if(event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {  
        return event.currentTarget.classList.add('valid');
    }
    
       return event.currentTarget.classList.add('invalid'); 
};

const handlerInputFocusRemoveValidation = (event) => {

    if(event.currentTarget.classList.contains('valid')) {
        return event.currentTarget.classList.remove('valid')
    }

    return event.currentTarget.classList.remove('invalid')
};

inputEl.addEventListener('blur', handlerInputBlurValidation);

inputEl.addEventListener('focus', handlerInputFocusRemoveValidation);