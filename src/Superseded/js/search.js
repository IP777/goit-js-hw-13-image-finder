//import imageCardTamplate from '../template/card.hbs';
import masonryInstance from './My_masonry';
import imagesLoaded from 'imagesloaded';
import gridItem from '../template/cardJS';
import refs from './refs';

const myHttpRequest = {
  baseUrl: 'https://pixabay.com/',
  API_KEY: '15197033-6a0a9e6d0bedb15a0a6a5ba9a',
  request: 'flower',
  pagination: 1,
  global_data: {},
  value: 0,

  //https://pixabay.com/api/?key=15197033-6a0a9e6d0bedb15a0a6a5ba9a&q=yellow+flowers&image_type=photo&pretty=true&per_page=3

  buildUrl() {
    const URL = `${this.baseUrl}api/?key=${this.API_KEY}&q=${this.request}&image_type=photo&per_page=12&page=${this.pagination}`;
    return URL;
  },
  getRequest(condition) {
    this.request = condition;
    fetch(this.buildUrl(), {
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
        this.createMarkup(data);
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },
  createMarkup(data) {
    console.log(data.hits);
    //---------------------------
    // const markup = data.hits
    //   .map(img_card => imageCardTamplate(img_card))
    //   .join('');

    // //refs.gallery_list.innerHTML = markup;
    // //const container = document.createDocumentFragment();
    // const container = document.createElement('div');
    // container.classList.add('container');
    // container.innerHTML = markup;
    // this.global_data = container;
    //---------------------------
    const markup = data.hits.map(img_card => {
      return gridItem(
        img_card.webformatURL,
        img_card.likes,
        img_card.views,
        img_card.comments,
        img_card.downloads,
      );
    });
    this.global_data = markup;
    this.renderMarkup(markup);
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
};

export default myHttpRequest;

//------------------------------------------------
/*
function logSubmit(event) {
  event.preventDefault();
  myHttpRequest.removeMarkup();
  myHttpRequest.getRequest(refs.form_text.value);
}

refs.form.addEventListener('submit', logSubmit);
*/
//----------------------------------------------
//console.log(msnry);

document.querySelector('#inp_remove').addEventListener('click', () => {
  const items = document.querySelectorAll('.grid-item');
  masonryInstance.remove(items);
  masonryInstance.layout();
});

document.querySelector('#inp_add').addEventListener('click', () => {
  //console.log(typeof myHttpRequest.global_data);
  //console.log(myHttpRequest.global_data);
  refs.gallery_list.append(...myHttpRequest.global_data);
  masonryInstance.addItems(myHttpRequest.global_data);

  imagesLoaded('#gallery').on(
    'progress',
    masonryInstance.layout.bind(masonryInstance),
  );
});
