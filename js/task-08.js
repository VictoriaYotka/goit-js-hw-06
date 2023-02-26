const formEl = document.querySelector('.login-form');

const handlerFormSubmit = (event) => {
    event.preventDefault();

    const {elements: {email, password}} = event.currentTarget;
  
    if(email.value === '' || password.value === '') {
        alert('Заповніть усі поля!');
        return
    }

    const userData = {
    'email': email.value,
    'password': password.value,
    }

    console.log(userData);

    event.currentTarget.reset();
};


formEl.addEventListener('submit', handlerFormSubmit)