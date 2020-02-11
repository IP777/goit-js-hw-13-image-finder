const makeGridItem = imgUrl => {
  const li = document.createElement('li');
  li.classList.add('grid-item');

  const img = document.createElement('img');
  img.src = imgUrl;

  li.appendChild(img);
  return li;
};

export default makeGridItem;
