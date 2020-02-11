import Masonry from 'masonry-layout';
import refs from './refs';

const masonryInstance = new Masonry(refs.gallery_list, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  //stagger: 30,
  // nicer reveal transition
  //visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  //hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

// imagesLoaded('#gallery').on(
//   'load',
//   masonryInstance.layout.bind(masonryInstance),
// );

export default masonryInstance;
