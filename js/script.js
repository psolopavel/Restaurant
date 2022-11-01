const header_search = document.querySelector('.header-search')
const header_search__input = document.querySelector('.header-search__input')
const header_search_loop = document.querySelector('.header-search_loop')
const header_search__button = document.querySelector('.header-search__button')
const header__burger = document.querySelector('.header__burger')
const burger_for_Left = document.querySelector('.burger-for-Left')
const pages_burger = document.querySelector('.pages-burger')
const sub_menu_spisock_pages = document.querySelector('.sub-menu-spisock-pages')
const exit_burger = document.querySelector('#exit-burger')
const recept = document.querySelectorAll('.recepts-one__category-of-recept')
let i = 0

header_search_loop.addEventListener('click', function (event) {
   header_search__input.classList.toggle('_active')
   header_search__button.classList.toggle('_active')
})
header__burger.addEventListener('click', function (event) {
   burger_for_Left.classList.add('_active')
   document.querySelector('.wrapper').classList.add('_active')
   if (burger_for_Left.closest('._active')) {
      document.body.classList.add('_hidden')
   }
})

document.addEventListener('click', function (event) {
   if (!event.target.closest('.burger-for-Left') && !event.target.closest('.header__burger')) {
      burger_for_Left.classList.remove('_active')
   }
   if (!burger_for_Left.closest('._active')) {
      document.body.classList.remove('_hidden')
      document.querySelector('.wrapper').classList.remove('_active')
   }
})
exit_burger.addEventListener('click', function () {
   burger_for_Left.classList.remove('_active')
   console.log('hi');
})
pages_burger.addEventListener('click', function () {
   sub_menu_spisock_pages.classList.toggle('_active')
   pages_burger.querySelector('span').classList.toggle('_active')
})

for (j of recept) {
   i++
   if (i > 1) {
      j.classList.add('border-left')
   }
}
