const carouselContainer = document.querySelector('.posts-carousel-container');
const tileBox = document.querySelector('.carousel-box-posts');
const tiles = document.querySelectorAll('.posts-carousel-tile');
const pagination = document.getElementById('posts-carousel-pagination');
const animationOffset = 300;
const requiredMoveOffsetToTrigger = 100;

let offsetX = 0;
let startPos = 0;
let moveOffset = 0;
let initCarouselTransitionValue = 'all 0.05s ease-in';
let tileWidth = 10;
let tilesQ = tiles.length;
let counter = 1;
let carouselTransitionXPercentage = 100;
let maxScreens = evalMaxScreens();
// For preventing triggering nextSlide() or prevSlide() on 'touch Click' (when user touches and not moving the finger)
let touchMoved = false;

window.addEventListener('resize', function () {
  this.setTimeout(function () {
    tileWidth = tiles[0].clientWidth;
    tilesQ = tiles.length;
    maxScreens = evalMaxScreens();
    tileBox.style.transform = `translateX(0)`;
    counter = 1;
    createPaginationBtns();
  }, animationOffset);
});

function fadeInListFix () {
  setTimeout(function () {
    tileWidth = tiles[0].clientWidth;
    tilesQ = tiles.length;
    maxScreens = evalMaxScreens();
    tileBox.style.transform = `translateX(0)`;
    counter = 1;
    createPaginationBtns();
  }, animationOffset);
}

fadeInListFix();

function evalTilesInRow () {
  let itemsInRow = carouselContainer.clientWidth / tileWidth;
  return Math.round(itemsInRow);
}

function evalMaxScreens () {
  let maxScreens = Math.floor(tilesQ / evalTilesInRow());
  if (evalTilesInRow() < tilesQ / maxScreens) {
    maxScreens++;
  }
  return maxScreens;
}

function carouselContainerPositionReset () {
  carouselContainer.style.transition = '0.3s ease-in';
  carouselContainer.style.transform = `translateX(0)`;
}

function createPaginationBtns () {
  pagination.innerHTML = '';
  for (let i = 1; i < maxScreens + 1; i++) {
    if (i <= maxScreens) {
      const dot = document.createElement('li');
      const dotLink = document.createElement('a');
      dot.appendChild(dotLink);
      dot.setAttribute('class', 'posts-carousel-slide-number-btn');
      dot.dataset.slideNumber = i;
      pagination.appendChild(dot);
    }
  }
  const slideNumberBtns = document.querySelectorAll('.posts-carousel-slide-number-btn');
  slideNumberBtns.forEach(btn => {
    const slideNumber = btn.dataset.slideNumber;
    slideNumberBtns[0].children[0].classList.add('active');
    btn.addEventListener('click', function (e) {
      slideNumberBtns.forEach(btn => {
        btn.children[0].classList.remove('active');
      });
      btn.children[0].classList.add('active');
      e.preventDefault();
      jumpToSlide(slideNumber);
    });
  });
}

createPaginationBtns();

function activeSlide (counter) {
  const slideNumberBtns = document.querySelectorAll('.posts-carousel-slide-number-btn');
  slideNumberBtns.forEach(btn => {
    btn.children[0].classList.remove('active');
  });
  slideNumberBtns[counter - 1].children[0].classList.add('active');
}

function jumpToSlide (slideNumber) {
  counter = slideNumber;
  tileBox.style.transform = `translateX(${-carouselTransitionXPercentage *
    (counter - 1)}%)`;
  activeSlide(counter);
}

function prevSlide () {
  if (counter > 1) {
    counter = counter - 1;
    tileBox.style.transform = `translateX(${-carouselTransitionXPercentage *
      (counter - 1)}%)`;
    activeSlide(counter);

    setTimeout(function () {
      carouselContainerPositionReset();
    }, animationOffset);
  } else {
    carouselContainerPositionReset();
  }
}

function nextSlide () {
  if (counter < maxScreens) {
    tileBox.style.transform = `translateX(${-carouselTransitionXPercentage *
      counter}%)`;
    counter = counter + 1;
    activeSlide(counter);
    setTimeout(function () {
      carouselContainerPositionReset();
    }, animationOffset);
  } else {
    carouselContainerPositionReset();
  }
}

function triggerSlideAction (offset, trigger, moveEventType) {
  switch (moveEventType) {
    case 'mouse':
      const mouseAction = () => (offset >= 0 ? nextSlide() : prevSlide());
      if (Math.abs(offset) > requiredMoveOffsetToTrigger && trigger) {
        mouseAction();
      }
      carouselContainer.style.transform = `translateX(0)`;
      break;
    case 'touch':
      const touchAction = () => (offset < 0 ? nextSlide() : prevSlide());
      if (Math.abs(offset) > requiredMoveOffsetToTrigger && trigger) {
        touchAction();
      }
      carouselContainer.style.transform = `translateX(0)`;
      break;
    default:
      carouselContainer.style.transform = `translateX(0)`;
  }
}

function touchStart (e) {
  e.preventDefault();
  startPos = e.changedTouches[0].clientX;
  carouselContainer.style.transition = initCarouselTransitionValue;
}

function touchMove (e) {
  touchMoved = true;
  e.preventDefault();
  offsetX = e.touches[0].clientX;
  moveOffset = offsetX - startPos;
  carouselContainer.style.transform = `translateX(${moveOffset * 0.4}px)`;
}

function touchEnd (e) {
  e.preventDefault();
  triggerSlideAction(moveOffset, touchMoved, 'touch');
  touchMoved = false;
}

carouselContainer.addEventListener('touchstart', touchStart);
carouselContainer.addEventListener('touchmove', touchMove);
carouselContainer.addEventListener('touchend', touchEnd);

// mouse
let mouseDown = false;
let mousePath = 0;
let startingPosX = 0;
let trigger = false;
let startTime = null;

function resetMouseValues () {
  mouseDown = false;
  mousePath = 0;
  trigger = false;
}

function mouseDownEvent (e) {
  mouseDown = true;
  mousePath = 0;
  startingPosX = e.clientX;
  carouselContainer.style.transition = initCarouselTransitionValue;
  startTime = new Date().valueOf();
}

function mouseLeaveEvent (e) {
  e.preventDefault();
  triggerSlideAction(mousePath, trigger, 'mouse');
  resetMouseValues();
}

function mouseUpEvent (e) {
  e.preventDefault();
  triggerSlideAction(mousePath, trigger, 'mouse');
  resetMouseValues();
  carouselContainer.style.transform = `translateX(0)`;
}

function mouseMoveEvent (e) {
  e.preventDefault();
  mousePath = startingPosX - e.clientX;
  let mouseMoveTime = (new Date().valueOf() - startTime) / 1000;
  let mouseV = Math.abs(mousePath) / mouseMoveTime;

  if (mouseV > 450 && mouseDown) {
    trigger = true;
  }

  if (trigger) {
    carouselContainer.style.transform = `translateX(${-mousePath * 0.4}px)`;
  }
}

carouselContainer.addEventListener('mousedown', mouseDownEvent);
carouselContainer.addEventListener('mouseleave', mouseLeaveEvent);
carouselContainer.addEventListener('mouseup', mouseUpEvent);
carouselContainer.addEventListener('mousemove', mouseMoveEvent);
