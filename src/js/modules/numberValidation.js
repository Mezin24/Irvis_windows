const numberInputValidation = (selector) => {
  document.querySelectorAll(selector).forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '');
    });
  });
};

export default numberInputValidation;
