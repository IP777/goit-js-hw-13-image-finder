import Masonry from 'masonry-layout';
import refs from './refs';

const masonryInstance = new Masonry(refs.gallery_list, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});
export default masonryInstance;
