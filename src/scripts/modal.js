const page = document.querySelector('html');
page.style.overflow = 'scroll';
const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close-modal');

function selectSpecificModal (modalBoxId) {
  return document.getElementById(`${modalBoxId}`);
}

function closeModal (modal) {
  modalContainer.classList.remove('show');
  selectSpecificModal(modal).classList.remove('show');
  page.style.overflow = 'scroll';
}

function showModal (modal) {
  modalContainer.classList.add('show');
  selectSpecificModal(modal).classList.add('show');
  page.style.overflow = 'hidden';

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode === 27) {
      closeModal(modal);
    }
  };

  closeBtn.addEventListener('click', function () {
    closeModal(modal);
  });
  modalContainer.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
      closeModal(modal);
    }
  });
}

exports.showModal = showModal;
