import imageCardTamplate from '../template/card.hbs';
import masonryInstance from './My_masonry';
import imagesLoaded from 'imagesloaded';
//import gridItem from '../template/cardJS';
import refs from './refs';
import alert from './pnotifyAlerts';
import proxyElement from './proxyElemen';

const myHttpRequest = {
  baseUrl: 'https://pixabay.com/',
  API_KEY: '15197033-6a0a9e6d0bedb15a0a6a5ba9a',
  request: 'flower',
  pagination: 1,

  buildUrl(pageIndex) {
    const URL = `${this.baseUrl}api/?key=${this.API_KEY}&q=${this.request}&image_type=photo&per_page=12&page=${pageIndex}`;
    return URL;
  },
  getRequest(condition) {
    this.request = condition;
    fetch(this.buildUrl(this.pagination), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(data);

        if (data.totalHits > 0) {
          this.removeMarkup();
          this.createMarkup(data);
        } else {
          alert.pError(
            'Упс',
            `По вашему запросу нечего не найдено
            попробуйте еще...
            `,
          );
        }
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },
  createMarkup(data) {
    const markup = data.hits
      .map(img_card => imageCardTamplate(img_card))
      .join('');

    this.renderMarkup(proxyElement(markup, '.grid-item'));
  },
  renderMarkup(markup) {
    refs.gallery_list.append(...markup);
    masonryInstance.addItems(markup);
    this.relayoutMasonry();
  },
  removeMarkup() {
    const items = document.querySelectorAll('.grid-item');
    masonryInstance.remove(items);
    masonryInstance.layout();
  },
  relayoutMasonry() {
    imagesLoaded('#gallery').on(
      'progress',
      masonryInstance.layout.bind(masonryInstance),
    );
  },
  goOnTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
};

//myHttpRequest.getRequest('car');

export default myHttpRequest;
