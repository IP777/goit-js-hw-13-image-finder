import imageCardTamplate from '../template/card.hbs';
import fake_request from '../JSON/fake_request';

const refs = {
  search_form: document.querySelector('#search-form'),
  gallery_list: document.querySelector('#gallery'),
};

const addTemplate = () => {
  refs.gallery_list.innerHTML = imageCardTamplate(fake_request);
};

addTemplate();

const myHttpRequest = {
  baseUrl: 'https://pixabay.com/',
  API_KEY: '15197033-6a0a9e6d0bedb15a0a6a5ba9a',
  request: 'yellow+flower',
  pagination: 1,

  // https://pixabay.com/api/?key=15197033-6a0a9e6d0bedb15a0a6a5ba9a&q=yellow+flowers&image_type=photo&pretty=true&per_page=3

  getUrl() {
    const URL = `${this.baseUrl}api/?key=${this.API_KEY}&q=${this.request}&image_type=photo&per_page=3&page=${this.pagination}`;
    return URL;
  },
  getRequest(condition) {
    fetch(this.getUrl(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        //console.log(response);
        if (response.ok) {
          // если HTTP-статус в диапазоне 200-299
          return response.json();
        }
        // если HTTP-статус в диапазоне 400-499, 500-599 передаёт ошибку
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

myHttpRequest.getRequest();
