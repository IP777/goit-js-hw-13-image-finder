const refs = {
  search_form: document.querySelector('#search-form'),
  gallery_list: document.querySelector('#gallery'),
  form: document.querySelector('#search-form'),
  form_text: document.querySelector('[name=query]'),
  anti_cors: 'https://cors-anywhere.herokuapp.com/',
  top_button: document.querySelector('#inp_top'),
  images: document.querySelectorAll('.grid-img '),
  loader: document.querySelector('.image-load-status'),

  loaderON() {
    this.loader.style.display = 'block';
  },
  loaderOFF() {
    this.loader.style.display = 'none';
  },
};

export default refs;
