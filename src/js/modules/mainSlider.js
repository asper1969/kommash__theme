let mainSlider = {

    settings: {
        heroSlider: $('.hero__slider'),
        mainSlider: $('#block-views-block-slider-block-1 .content'),
        slideImage: $('#block-views-block-slider-block-1 .content .views-row'),
        slideTitle: $('#block-views-block-slider-block-2 .content .views-row a'),
        currentSlide: $('.hero__slider .content .views-row.active')
    },

    init: function(){
        let handler = this;
        this.settings.heroSlider.attr('data-index', 0);
        this.settings.slideImage.each((i, el)=>{
            $(el).attr('data-index', i);
        });
        this.settings.slideTitle.each((i, el)=>{
            $(el).attr('data-index', i);
        });
        this.settings.slideImage.first().addClass('active');
        this.settings.slideTitle.first().addClass('active');
        this.settings.slideTitle.hover(function(e){
            let target = e.target;
            handler.setSlide(target);
        });

        let pager = '<div class="pager"></div>';
        let elements = [];
        this.settings.mainSlider.append(pager);
        this.settings.slideImage.each(function(i,el){
            let index = $(this).attr('data-index');
            let bullet = '<div class="bullet" data-index="' + index +'"></div>';
            elements.push(bullet);
        });

        this.settings.mainSlider.find('.pager').append(elements);

        this.settings.pager = this.settings.mainSlider.find('.bullet');
        this.settings.pager.first().addClass('active');
        this.settings.pager.click(function(e){
            let target = e.target;
            handler.setSlide(target);
        });

        let ww = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        if(ww < 768){
            //this.settings.slideTitle.unbind('hover');
            let $titles = this.settings.slideTitle.closest('.views-row').parent();
            let $slides = this.settings.slideImage.parent();

            $('.hero__slider .container .contextual').remove();

            $titles.slick({
                slidesToShow: 1,
                arrows: false,
                asNavFor: $slides
            });

            $titles.slick('slickRemove', 0);

            $slides.slick({
                slidesToShow: 1,
                fade: true,
                asNavFor: $titles
            });

            $slides.slick('slickRemove', 0);
        }
    },

    setSlide: function(target){
        let index = $(target).attr('data-index');
        this.settings.heroSlider.attr('data-index', index);
        $('.hero__slider .content .active').removeClass('active');
        $('.hero__slider .content *[data-index="' + index + '"').addClass('active');
    }
};

module.exports = mainSlider;