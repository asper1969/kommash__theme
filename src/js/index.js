import mainSlider from './modules/mainSlider.js';
import mobileMenu from './modules/mobileMenu.js';
import carouselFront from './modules/carouselFront.js';
import mobileCatalog from './modules/mobileCatalog.js';
import form from './modules/form.js';
import {slick} from 'slick-carousel';
import niceScroll from 'jquery.nicescroll';

$(document).ready(function(){
    mainSlider.init();
    mobileMenu.init();
    carouselFront.init();
    mobileCatalog.init();
    form.init();

    $('.page__wrapper.page .imgs').slick({
        slidesToShow: 1,
         fade: true
    });


    if($('.views-element-container').length){

        let title = $('h1').text().trim();
        $('h1').html(`<span>${title}</span>`);
    }

    if($('.content__suffix #block-views-block-table-block-1 .content').length){

        $('.content__suffix #block-views-block-table-block-1 ' +
            '.content').niceScroll({
            autohidemode: false,
            cursorwidth: 17,
            cursorfixedheight: 17,
            cursorcolor: '#e56d0d',
            cursorborder: '5px solid rgba(244, 82, 24, .2)',
            cursorborderradius: 8,
            cursordragontouch: true
        });
    }

    if($('.imgs-sm').length){
        $('.imgs-sm ul').slick({
            slidesToShow: 3,
            asNavFor: $('.page__wrapper.page .imgs'),
            variableWidth: true,
            focusOnSelect: true,
            centerMode: true
        });

        $('.page__wrapper.page .imgs').slick('slickSetOption', {
            asNavFor: $('.imgs-sm ul'),
            arrows: false
        });
    }

    $('.layout__region.layout__region--second .list').niceScroll({
        autohidemode: false,
        cursorwidth: 17,
        cursorfixedheight: 17,
        cursorcolor: '#e56d0d',
        cursorborder: '5px solid rgba(244, 82, 24, .2)',
        cursorborderradius: 8,
        cursordragontouch: true,
        railoffset: {
            left: 9
        }
    });

    $('.page__wrapper .sidebar nav>ul>li>a').each(function(i, el){
        let category = $(this).text().trim();

        if($('.page__wrapper #block-webmaster-breadcrumbs .content li a:contains(' + category + ')').length){
            $(this).addClass('is-active');
        }
    });
});
