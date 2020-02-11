import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const grid = document.querySelector('#gallery');

const masonryInstance = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  //stagger: 30,
  // nicer reveal transition
  //visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  //hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

imagesLoaded('#gallery').on(
  'progress',
  masonryInstance.layout.bind(masonryInstance),
);

export default masonryInstance;
