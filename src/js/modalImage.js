import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';
import proxyElement from './proxyElemen';

function handleNavClick(event) {
  event.preventDefault();
  const target = event.target;
  //console.log(target);
  if (target.tagName != 'UL') {
    refs.loaderON();
    let imageObject = `<img src="${target.dataset.largImage}" alt="${target.alt}" class="lagre-image"/>`;

    proxyElement(imageObject, 'img', 'one').onload = () => {
      refs.loaderOFF();
      basicLightbox.create(imageObject).show();
    };
  }
}

refs.gallery_list.addEventListener('click', handleNavClick);
