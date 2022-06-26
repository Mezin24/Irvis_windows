import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import form from './modules/form';
import changeFormState from './modules/changeFormState';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let formState = {};
  changeFormState(formState);

  modal();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs(
    '.decoration_slider',
    '.no_click',
    '.decoration_content > div > div',
    'after_click'
  );
  tabs(
    '.balcon_icons',
    '.balcon_icons_img',
    '.big_img > img',
    'do_image_more',
    'inline-block'
  );
  form(formState);
});
