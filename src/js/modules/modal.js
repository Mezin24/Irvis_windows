const modal = () => {
  let opened = false;

  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeByOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const modals = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    const closeModals = () => {
      modals.forEach((modal) => (modal.style.display = 'none'));
    };

    function openModal(modal) {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.style.marginRight = `${scroll}px`;
      opened = true;
    }

    function closeModal(modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.marginRight = `0px`;
      closeModals();
    }

    trigger.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        closeModals();
        openModal(modal);
      });
    });

    close.addEventListener('click', closeModal.bind(null, modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeByOverlay) {
        closeModals();
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

  function calcScroll() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  calcScroll();

  bindModal(
    '.popup_engineer_btn',
    '.popup_engineer',
    '.popup_engineer .popup_close'
  );

  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
  bindModal(
    '.popup_calc_button',
    '.popup_calc_profile',
    '.popup_calc_profile_close',
    false
  );
  bindModal(
    '.popup_calc_profile_button',
    '.popup_calc_end',
    '.popup_calc_end_close',
    false
  );

  // openModalByTime('.popup', 60);
};

export default modal;
