const previous = document.getElementById('button-previous');
const next = document.getElementById('button-next');
const images = document.querySelectorAll('.advertisement-photo');
const banner = document.getElementById('banner');
const threshold = 75; // required min distance traveled to be considered swipe
const allowedTime = 200; // maximum time allowed to travel that distance
let startX;
let dist;
let elapsedTime;
let startTime;

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
  i += 1;
  if (i >= imagesLen) {
    i = 0;
  }
  images[i].classList.add('active-photo');
}

next.addEventListener('click', nextPicture);

function prevPicture () {
  let i = isActive();
  images[i].classList.remove('active-photo');
  i -= 1;
  if (i < 0) {
    i = imagesLen - 1;
  }
  images[i].classList.add('active-photo');
}

previous.addEventListener('click', prevPicture);

function bannerSwipe (swipe) {
  if (swipe) {
    nextPicture();
  } else {
    prevPicture();
  }
}

banner.addEventListener(
  'touchstart',
  function (event) {
    const touch = event.changedTouches[0];
    dist = 0;
    startX = touch.pageX;
    startTime = new Date().getTime();
  },
  false
);

banner.addEventListener(
  'touchend',
  function (event) {
    let swipeDirection;
    const touch = event.changedTouches[0];
    dist = touch.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;

    if (dist > 0 && dist > threshold && elapsedTime <= allowedTime) {
      swipeDirection = true; // next picture
      bannerSwipe(swipeDirection);
    } else if (dist < 0 && Math.abs(dist) > threshold && elapsedTime <= allowedTime) {
      swipeDirection = false; // previous picture
      bannerSwipe(swipeDirection);
    } else {
    }
  },
  false
);
