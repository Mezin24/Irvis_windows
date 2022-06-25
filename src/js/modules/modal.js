const modal = () => {
  let opened = false;

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);

    function openModal(modal) {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      opened = true;
    }

    function closeModal(modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
          openModal(modal);
        }
      });
    });

    close.addEventListener('click', closeModal.bind(null, modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  }

  function openModalByTime(modal, time) {
    setTimeout(function () {
      if (opened) return;

      document.querySelector(modal).style.display = 'block';
      document.body.classList.add('modal-open');
    }, time * 1000);
  }

  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );

  bindModal('.phone_link', '.popup', '.popup .popup_close');
  // openModalByTime('.popup', 60);
};

export default modal;
