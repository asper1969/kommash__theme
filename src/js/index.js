import mainSlider from './modules/mainSlider.js';
import mobileMenu from './modules/mobileMenu.js';
import carouselFront from './modules/carouselFront.js';
import mobileCatalog from './modules/mobileCatalog.js';
import {slick} from 'slick-carousel';

$(document).ready(function(){
    mainSlider.init();
    mobileMenu.init();
    carouselFront.init();
    mobileCatalog.init();

    $('.page__wrapper.page .imgs').slick({
        slidesToShow: 1,
         fade: true
    });
});
