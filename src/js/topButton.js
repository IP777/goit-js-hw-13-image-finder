import myHttpRequest from './search';
import refs from './refs';

const go_to_bottom = () => myHttpRequest.goOnTop();

refs.top_button.addEventListener('click', go_to_bottom);
