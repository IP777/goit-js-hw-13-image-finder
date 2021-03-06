import myHttpRequest from './search';
import refs from './refs';

function logSubmit(event) {
  myHttpRequest.goOnTop();
  event.preventDefault();
  myHttpRequest.getRequest(refs.form_text.value);
}

refs.form.addEventListener('submit', logSubmit);

function deleteText(event) {
  event.target.value = '';
}
refs.form_text.addEventListener('blur', deleteText, true);
