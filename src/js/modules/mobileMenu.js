let mobileMenu = {

    settings:{
        menu: $('.mobile__menu'),
        mobileBtn: $('.mobile__btn, .mobile__menu .close__btn'),
        mobileCatalog: $('.page__wrapper .sidebar'),
        btn: $('#block-catalog-link>.content a')
    },

    init: function(){
        let handler = this;
        this.settings.mobileBtn.click(function(){
            handler.openMenu();
        });
    },

    openMenu: function(){
        this.settings.btn.removeClass('active');
        this.settings.mobileCatalog.removeClass('active');
        this.settings.mobileBtn.toggleClass('active');
        this.settings.menu.toggleClass('active');
    }
};

module.exports = mobileMenu;