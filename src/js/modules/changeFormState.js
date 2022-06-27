import numberInputValidation from './numberValidation';

const changeFormState = (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowTempCheckbox = document.querySelectorAll(
    'input[type="checkbox"]'
  );

  numberInputValidation('#width');
  numberInputValidation('#height');

  const bindPropState = (elems, event, stateProp) => {
    elems.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN': {
            state[stateProp] = i;
            break;
          }
          case 'INPUT': {
            if (item.type === 'text') {
              state[stateProp] = item.value;
            } else if (item.type === 'checkbox') {
              windowTempCheckbox.forEach((item) => {
                item.checked = false;
              });
              item.checked = true;
              state[stateProp] = i === 0 ? 'Холодное' : 'Теплое';
            }
            break;
          }
          case 'SELECT': {
            state[stateProp] = item.value;
            break;
          }
        }
      });
    });
  };

  bindPropState(windowForms, 'click', 'form');
  bindPropState(windowWidth, 'input', 'width');
  bindPropState(windowHeight, 'input', 'height');
  bindPropState(windowType, 'change', 'type');
  bindPropState(windowTempCheckbox, 'click', 'temp');
};

export default changeFormState;
