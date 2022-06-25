const tabs = (containerSelector, tabSelector, contentSelector, activeClass) => {
  const container = document.querySelector(containerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  const hideModals = () => {
    contents.forEach((item) => {
      item.style.display = 'none';
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass.replace(/\./, ''));
    });
  };

  const showTab = (i = 0) => {
    tabs[i].classList.add(activeClass.replace(/\./, ''));
    contents[i].style.display = 'block';
  };

  container.addEventListener('click', (e) => {
    const { target } = e;

    if (
      (target && target.classList.contains(tabSelector.replace(/\./, ''))) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
    ) {
      tabs.forEach((item, i) => {
        if (item === target || item === target.parentNode) {
          hideModals();
          showTab(i);
        }
      });
    }
  });

  hideModals();
  showTab();
};

export default tabs;
