let mobileCatalog = {

    settings: {
        catalog: $('.sidebar'),
        btn: $('#block-catalog-link--2 .content a'),
        mobileBtn: $('.mobile__btn, .mobile__menu .close__btn'),
        mobileMenu: $('.mobile__menu'),
        closeBtn: $('.page__wrapper .sidebar .close__btn')
    },

    init: function(){
        let handler = this;
        this.settings.btn.click(()=>{
            handler.openCatalog();

            return false;
        });
        this.settings.closeBtn.click(()=>{
            handler.closeCatalog();
        });
    },

    openCatalog: function(){
        this.settings.mobileBtn.removeClass('active');
        this.settings.mobileMenu.removeClass('active');
        this.settings.catalog.toggleClass('active');
        this.settings.btn.toggleClass('active');
    },

    closeCatalog: function(){
        this.settings.catalog.removeClass('active');
        this.settings.btn.removeClass('active');
    }
};

module.exports = mobileCatalog;