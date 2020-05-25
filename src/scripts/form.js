import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  $('.contacts-form__input').on('input', function() {
    const currentElement = $(this)
    
    if (currentElement.val()) {
      currentElement.addClass('contacts-form__input_valid-input');
    }else {
      currentElement.removeClass('contacts-form__input_valid-input');
    }
  });



  const form = document.querySelector('.contacts-form');
  const btn = document.querySelector('.btn');
  const overlay = document.querySelector('.overlay');
  const footerMess = document.querySelectorAll('.overlay__footer-message');
  btn.addEventListener('click', function() {
    event.preventDefault();
  
  
    if(validateForm(form)) {
      const data = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value
      };
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '');
      xhr.send(JSON.stringify(data));
      overlay.classList.add('open');

      xhr.addEventListener('load', function() {
          if(xhr.response.status<400) {
            footerMess[0].classList.add('open')
          }
          if(xhr.response.status>=400) {
            footerMess[1].classList.add('open')
          }
          if(!xhr.response.status) {
            footerMess[2].classList.add('open')
          }

      })
    }
  })
  
  function validateForm(form) {
    let valid = true;
  
    if(!validateField(form.elements.name)) {
      valid = false;
    }
    if(!validateField(form.elements.email)) {
      valid = false;
    }
    if(!validateField(form.elements.message)) {
      valid = false;
    }
  
    return valid;
  }
  
  function validateField(field) {
    if(!field.checkValidity()) {
      field.classList.add('contacts-form__input_error');
    }else {
      field.classList.remove('contacts-form__input_error');
    }
    return field.checkValidity();
  }
})

