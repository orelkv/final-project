import $ from 'jquery';
document.addEventListener('DOMContentLoaded', () => {
  $('.contacts-form__input').on('input', function() {
    $(this).addClass('contacts-form__input_valid-input');
  })
})