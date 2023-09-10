const header = document.querySelector('.header');
const headerNavLink = document.querySelector('.header__nav--link');
const headerMenuBtn =  document.querySelector('.header__menubtn');
const headerNav = document.querySelector('.header__nav');
const headerMenuBtnOpen = document.querySelector('.header__menubtn--open');
const headerMenuBtnClose = document.querySelector('.header__menubtn--close');




window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 0) {
        header.style.backgroundColor = '#81BFA8';
        // headerNavLink.addEventLis
    }
    else {
        header.style.backgroundColor = 'inherit';
    }
})


headerMenuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav--active');
    headerMenuBtnOpen.classList.toggle('hidden');
    headerMenuBtnClose.classList.toggle('hidden');
})