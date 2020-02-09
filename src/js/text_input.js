const refs = {
  form: document.querySelector('#search-form'),
  form_text: document.querySelector('[name=query]'),
};

function logSubmit(event) {
  event.preventDefault();

  console.log(refs.form_text.value);
}

refs.form.addEventListener('submit', logSubmit);
