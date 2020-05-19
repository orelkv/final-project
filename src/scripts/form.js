import $ from 'jquery';
document.addEventListener('DOMContentLoaded', () => {
  $('.contacts-form__input').on('input', function() {
    const currentElement = $(this)
    
    if (currentElement.val()) {
      currentElement.addClass('contacts-form__input_valid-input');
    }else {
      currentElement.removeClass('contacts-form__input_valid-input');
    }
  })
})