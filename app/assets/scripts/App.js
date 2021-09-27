import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu.js'
import RevealOnScroll from './modules/RevealOnScroll.js'

if (module.hot) {
    module.hot.accept();
}

const mobileMenu = new MobileMenu;
new RevealOnScroll(document.querySelectorAll(".feature-item"));
new RevealOnScroll(document.querySelectorAll(".testimonial"));

