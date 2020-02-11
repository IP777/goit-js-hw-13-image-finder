import refs from './refs';
import masonryInstance from './My_masonry';
import InfiniteScroll from 'infinite-scroll';
import myHttpRequest from './search';
import imageCardTamplate from '../template/card.hbs';
import alert from './pnotifyAlerts';

const infScroll = new InfiniteScroll(refs.gallery_list, {
  path() {
    return refs.anti_cors + myHttpRequest.buildUrl(this.pageIndex + 1);
  },
  responseType: 'text',
  history: false,
  //append: '.grid-item',
  outlayer: masonryInstance,
  status: '.page-load-status',
});

infScroll.on('load', (response, url) => {
  //console.log(response);
  const posts = JSON.parse(response);
  const markup = posts.hits.map(post => imageCardTamplate(post)).join('');

  const proxyEl = document.createElement('div');
  proxyEl.innerHTML = markup;
  const parsedItems = proxyEl.querySelectorAll('.grid-item');

  myHttpRequest.renderMarkup(parsedItems);
});

if (refs.form_text.value) {
  infScroll.loadNextPage();
} else {
  alert.pInfo(
    'Привет',
    'Для начала работы введи название картинок в поле Search images...',
  );
}
