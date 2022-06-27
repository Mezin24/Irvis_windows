import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import form from './modules/form';
import changeFormState from './modules/changeFormState';
import timer from './modules/timer';

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
  timer('.container1', '2022-06-26T23:00:00');
  // timer('.container1', '2022-06-26');
});
