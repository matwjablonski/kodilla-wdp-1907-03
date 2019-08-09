import { showModal } from './modal';
let triggered = false; // so it is not that annoying :)

const page = document.querySelector('html');

function listenToLeaveFromTop (e) {
  if (e.clientY <= 0) {
    return true;
  } else {
    return false;
  }
}

page.addEventListener('mouseleave', function (e) {
  if (!triggered && listenToLeaveFromTop(e)) {
    showModal('mouse-leave-modal');
    triggered = true;
  }
});
