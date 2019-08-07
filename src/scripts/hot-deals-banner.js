const previous = document.getElementById('button-previous');
const next = document.getElementById('button-next');
var images = document.querySelectorAll('.advertisement-photo');

var imagesLen = images.length;

function isActive () {
  for (var i = 0; i < imagesLen; i++) {
    if (images[i].classList.contains('active-photo')) {
      return i;
    }
  }
}

function nextPicture () {
  var i = isActive();
  images[i].classList.remove('active-photo');
  i++;
  if (i >= imagesLen) {
    i = 0;
  }
  images[i].classList.add('active-photo');
}

next.addEventListener('click', nextPicture);

function prevPicture () {
  var i = isActive();
  images[i].classList.remove('active-photo');
  i--;
  if (i < 0) {
    i = imagesLen - 1;
  }
  images[i].classList.add('active-photo');
}

previous.addEventListener('click', prevPicture);
