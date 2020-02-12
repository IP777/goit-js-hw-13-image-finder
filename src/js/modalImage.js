import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';

function handleNavClick(event) {
  event.preventDefault();
  const target = event.target;
  //console.log(target);
  if (target.tagName != 'UL') {
    const imageObject = `<img src="${target.dataset.largImage}" alt="${target.alt}" />`;
    basicLightbox.create(imageObject).show();
  }
}

refs.gallery_list.addEventListener('click', handleNavClick);
