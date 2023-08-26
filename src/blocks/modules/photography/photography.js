

let btns = document.querySelectorAll('.photography__gallery-btn');
let lists = document.querySelectorAll('.photography__img-list');


function showPhotoList(event) {
  for (let i = 0; i < btns.length; i++) {
    if (lists[i].classList.contains('photography__img-list_active')) {
      lists[i].classList.remove('photography__img-list_active');
    }
    if (btns[i].classList.contains('photography__gallery-btn_active')) {
      btns[i].classList.remove('photography__gallery-btn_active');
    }
    if (btns[i].isEqualNode(event.currentTarget)) {
      lists[i].classList.add('photography__img-list_active');
      btns[i].classList.add('photography__gallery-btn_active');
    }
  }
}

for (let btn of btns) {
  btn.addEventListener('click', showPhotoList);
}
