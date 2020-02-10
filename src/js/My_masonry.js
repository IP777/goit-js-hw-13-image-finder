import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const grid = document.querySelector('#gallery');

const msnry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});

imagesLoaded('#gallery').on('progress', msnry.layout.bind(msnry));

//console.log(msnry);

export default msnry;
