import imageCardTamplate from '../template/card.hbs';
import fake_request from '../JSON/fake_request';
import msnry from './My_masonry';
import imagesLoaded from 'imagesloaded';

const refs = {
  search_form: document.querySelector('#search-form'),
  gallery_list: document.querySelector('#gallery'),
  form: document.querySelector('#search-form'),
  form_text: document.querySelector('[name=query]'),
};

const myHttpRequest = {
  baseUrl: 'https://pixabay.com/',
  API_KEY: '15197033-6a0a9e6d0bedb15a0a6a5ba9a',
  request: 'yellow+flower',
  pagination: 1,

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
        this.renderRequest(data);
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },
  renderRequest(data) {
    //console.log(data);
    this.manyRequest(data);
  },
  manyRequest(data) {
    //console.log(data.hits);
    //this.hiddenAddRemove('many');
    const markup = data.hits
      .map(img_card => imageCardTamplate(img_card))
      .join('');
    refs.gallery_list.innerHTML = markup;
  },
};

//myHttpRequest.getRequest('car');

//------------------------------------------------
function logSubmit(event) {
  event.preventDefault();
  myHttpRequest.getRequest(refs.form_text.value);
  //console.log(refs.form_text.value);
  setTimeout(() => {
    const items = document.querySelectorAll('.grid-item');
    console.log(items);
    msnry.appended(items);
    msnry.layout();
    //msnry.layout.bind(msnry);
  }, 1000);
}

refs.form.addEventListener('submit', logSubmit);

//console.log(msnry);
