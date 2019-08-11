import { showModal } from './modal';
let triggered = false; // so it is not that annoying :)

const page = document.querySelector('html');

page.addEventListener('mouseleave', function (e) {
  if (!triggered && e.clientY <= 0) {
    showModal('mouse-leave-modal');
    triggered = true;
  }
});
