const imgModal = () => {
  const imgSection = document.querySelector('.works');
  const popup = document.createElement('div');
  const popupImg = document.createElement('img');

  popup.classList.add('popup');
  popup.style.cssText =
    'display: none; justify-content: center; align-items: center';

  popupImg.style.cssText = 'width: 700px; max-width: 90%';

  imgSection.addEventListener('click', (e) => {
    e.preventDefault();
    const { target } = e;

    if (target && target.classList.contains('preview')) {
      const img = target.parentNode.getAttribute('href');
      popupImg.setAttribute('src', img);
      popup.style.display = 'flex';
      popup.append(popupImg);
      document.body.append(popup);
      document.body.classList.add('modal-open');
    }
  });

  popup.addEventListener('click', (e) => {
    const { target } = e;
    if (target && target.matches('div.popup')) {
      popup.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
};

export default imgModal;
