const headerMenuBtn =  document.querySelector('.header__menubtn');
const headerNav = document.querySelector('.header__nav');
const headerMenuBtnOpen = document.querySelector('.header__menubtn--open');
const headerMenuBtnClose = document.querySelector('.header__menubtn--close');






headerMenuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav--active');
    headerMenuBtnOpen.classList.toggle('hidden');
    headerMenuBtnClose.classList.toggle('hidden');
})