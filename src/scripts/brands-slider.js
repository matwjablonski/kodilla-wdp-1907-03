const carouselBox = document.querySelector('#brands-carousel');
const items = document.querySelectorAll('.logo-box');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

let valueToTranslate = carouselBox.clientWidth;
let translate = 0;

let maxCounter = Math.ceil((items[0].clientWidth * items.length) / valueToTranslate);
let counter = 1;

window.addEventListener('resize', function () {
  this.setTimeout(function () {
    valueToTranslate = carouselBox.clientWidth;
    maxCounter = Math.ceil((items[0].clientWidth * items.length) / valueToTranslate);
  }, 500);
});

nextBtn.addEventListener('click', function () {
  if (counter < maxCounter) {
    translate = valueToTranslate * counter;
    carouselBox.style.transform = `translateX(-${translate}px)`;
    counter += 1;
  }
});

prevBtn.addEventListener('click', function () {
  if (counter > 1) {
    counter = counter - 1;
    translate = translate - valueToTranslate;
    carouselBox.style.transform = `translateX(-${translate}px)`;
  }
});

// const carouselContainer = document.querySelector('.brands-slider-box');
// const tileBox = document.querySelector('.carousel-box-posts');
// const tiles = document.querySelectorAll('.posts-carousel-tile');
// const pagination = document.getElementById('posts-carousel-pagination');
// const animationOffset = 300;
// const requiredMoveOffsetToTrigger = 100;

/// /let offsetX = 0;
/// /let startPos = 0;
/// /let moveOffset = 0;
/// /let initCarouselTransitionValue = 'all 0.05s ease-in';
// let tileWidth = 10;
// let tilesQ = tiles.length;
// let counter = 1;
// let carouselTransitionXPercentage = 100;
// let maxScreens = evalMaxScreens();
// For preventing triggering nextSlide() or prevSlide() on 'touch Click' (when user touches and not moving the finger)
// let touchMoved = false;

/*
nextBtn.addEventListener('click', nextButton);
prevBtn.addEventListener('click', prevButton);

const nextButton = function()   {
    if (counter < maxCounter) {
        translate = valueToTranslate * counter;
        carouselBox.style.transform = `translateX(-${translate}px)`;
        counter += 1;
      }

};

const prevButton = function()   {
    if (counter > 1) {
        counter = counter - 1;
        translate = translate - valueToTranslate;
        carouselBox.style.transform = `translateX(-${translate}px)`;
    }
};
*/

/*
function triggerSlideAction (offset, trigger, moveEventType) {
    switch (moveEventType) {
      case 'mouse':
        const mouseAction = () => (offset >= 0 ? nextButton() : prevButton());
        if (Math.abs(offset) > requiredMoveOffsetToTrigger && trigger) {
          mouseAction();
        }
        carouselContainer.style.transform = `translateX(0)`;
        break;
      case 'touch':
        const touchAction = () => (offset < 0 ? nextButton() : prevButton());
        if (Math.abs(offset) > requiredMoveOffsetToTrigger && trigger) {
          touchAction();
        }
        carouselContainer.style.transform = `translateX(0)`;
        break;
      default:
        carouselContainer.style.transform = `translateX(0)`;
    }
  }
  */
/*
function touchStart (e) {
  e.preventDefault();
  startPos = e.changedTouches[0].clientX;
  carouselBox.style.transition = initCarouselTransitionValue;
}

function touchMove (e) {
  touchMoved = true;
  e.preventDefault();
  offsetX = e.touches[0].clientX;
  moveOffset = offsetX - startPos;
  carouselBox.style.transform = `translateX(${moveOffset * 0.4}px)`;
}

function touchEnd (e) {
  e.preventDefault();
  // triggerSlideAction(moveOffset, touchMoved, 'touch');
  touchMoved = false;
}

carouselBox.addEventListener('touchstart', touchStart);
carouselBox.addEventListener('touchmove', touchMove);
carouselBox.addEventListener('touchend', touchEnd);

// mouse
//let mouseDown = false;
let mousePath = 0;
let startingPosX = 0;
// let trigger = false;
let startTime = null;

function resetMouseValues () {
  mouseDown = false;
  mousePath = 0;
  // trigger = false;
}

function mouseDownEvent (e) {
  mouseDown = true;
  mousePath = 0;
  startingPosX = e.clientX;
  carouselBox.style.transition = initCarouselTransitionValue;
  startTime = new Date().valueOf();
}

function mouseLeaveEvent (e) {
  e.preventDefault();
  // triggerSlideAction(mousePath, trigger, 'mouse');
  resetMouseValues();
}

function mouseUpEvent (e) {
  e.preventDefault();
  // triggerSlideAction(mousePath, trigger, 'mouse');
  resetMouseValues();
  carouselBox.style.transform = `translateX(0)`;
}

function mouseMoveEvent (e) {
  e.preventDefault();
  mousePath = startingPosX - e.clientX;
  let mouseMoveTime = (new Date().valueOf() - startTime) / 1000;
  //let mouseV = Math.abs(mousePath) / mouseMoveTime;

    if (mouseV > 450 && mouseDown) {
      trigger = true;
    }

    if (trigger) {
      carouselContainer.style.transform = `translateX(${-mousePath * 0.4}px)`;
    }
}
*/
/*
carouselBox.addEventListener('mousedown', mouseDownEvent);
carouselBox.addEventListener('mouseleave', mouseLeaveEvent);
carouselBox.addEventListener('mouseup', mouseUpEvent);
carouselBox.addEventListener('mousemove', mouseMoveEvent);
*/
/*
  function evalMaxScreens () {
    let maxScreens = Math.floor(tilesQ / evalTilesInRow());
    if (evalTilesInRow() < tilesQ / maxScreens) {
      maxScreens++;
    }
    return maxScreens;
  }

  function evalTilesInRow () {
    const itemsInRow = carouselContainer.clientWidth / tileWidth;
    return Math.round(itemsInRow);
  }
*/

/*
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
  */
