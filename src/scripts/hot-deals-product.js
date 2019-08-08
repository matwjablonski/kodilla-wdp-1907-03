var productBox = document.querySelectorAll('.hot-deals-box');

var productBoxLen = productBox.length;

function isActive () {
  for (var i = 0; i < productBoxLen; i++) {
    if (productBox[i].classList.contains('active-hot-deal')) {
      return i;
    }
  }
}

function autoChange () {
  var i = isActive();
  productBox[i].classList.remove('active-hot-deal');
  i++;
  if (i >= productBoxLen) {
    i = 0;
  }
  productBox[i].classList.add('active-hot-deal');
}

setInterval(autoChange, 3000);
