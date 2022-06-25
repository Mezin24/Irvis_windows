const form = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"');

  const phoneInputValidation = (input) => {
    input.addEventListener('input', () => {
      console.log('object');
      input.value = input.value.replace(/\D/, '');
    });
  };
  phoneInputs.forEach(phoneInputValidation);

  const message = {
    loading: 'Загрузка...',
    success: 'Спаспибо! Скоро с вами свяжутся.',
    failure: 'Что-то пошло не так',
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusEl = document.createElement('div');
      statusEl.classList.add('status');
      form.append(statusEl);

      const formData = new FormData(form);
      clearInputs();
      postData('../assets/server.php', formData)
        .then((res) => {
          console.log(res);
          statusEl.textContent = message.success;
        })
        .catch(() => (statusEl.textContent = message.failure))
        .finally(() => {
          setTimeout(() => statusEl.remove(), 5000);
        });
    });
  });
};

export default form;
