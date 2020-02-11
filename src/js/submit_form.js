import myHttpRequest from './search';
import refs from './refs';

function logSubmit(event) {
  event.preventDefault();
  myHttpRequest.removeMarkup();
  myHttpRequest.getRequest(refs.form_text.value);
}

refs.form.addEventListener('submit', logSubmit);
