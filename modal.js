const modalSwitch = document.querySelector('.switch-box-btn button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.fa-xmark');
const modalBg = document.querySelector('.modal-bg');
let closeModal = [closeBtn, modalBg];

modalSwitch.addEventListener('click', () => {
  modal.classList.remove('hide');
})

closeModal.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
    modal.classList.add('hide');
  })
})