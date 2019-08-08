const previous = document.getElementById('button-previous');
const next = document.getElementById('button-next');
const images = document.querySelectorAll('.advertisement-photo');

const imagesLen = images.length;

function isActive () {
  for (let i = 0; i < imagesLen; i++) {
    if (images[i].classList.contains('active-photo')) {
      return i;
    }
  }
}

function nextPicture () {
  let i = isActive();
  images[i].classList.remove('active-photo');
  i++;
  if (i >= imagesLen) {
    i = 0;
  }
  images[i].classList.add('active-photo');
}

next.addEventListener('click', nextPicture);

function prevPicture () {
  let i = isActive();
  images[i].classList.remove('active-photo');
  i--;
  if (i < 0) {
    i = imagesLen - 1;
  }
  images[i].classList.add('active-photo');
}

previous.addEventListener('click', prevPicture);
