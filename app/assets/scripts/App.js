import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'
import StickyHeader from './modules/StickyHeader.js'

new MobileMenu;
new RevealOnScroll(document.querySelectorAll(".feature-item"));
new RevealOnScroll(document.querySelectorAll(".testimonial"));
new StickyHeader();
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if (typeof modal == 'undefined') {
        import(/* webpackChunkName: 'modal' */ "./modules/Modal")
          .then((x) => {
            modal = new x.default();
            setTimeout(() => modal.openTheModal(), 20);
          })
          .catch(() => console.log("issue loading"));
        } else {
            modal.openTheModal();
        };
    })
})

if (module.hot) {
  module.hot.accept();
}