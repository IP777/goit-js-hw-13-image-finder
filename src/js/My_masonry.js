import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const grid = document.querySelector('#gallery');

const masonryInstance = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});

imagesLoaded('#gallery').on(
  'progress',
  masonryInstance.layout.bind(masonryInstance),
);

//console.log(masonryInstance);

export default masonryInstance;
