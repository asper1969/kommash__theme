let carouselFront = {

    settings: {
        carousel: $('.services>div'),
        screen: (window.innerWidth > 0) ? window.innerWidth : screen.width
    },

    init: function(){

        if(this.settings.screen < 768){
            this.settings.carousel.slick({
                slidesToShow: 1,
                variableWidth: true
            });
        }
    }
};

module.exports = carouselFront;