/**
 * Created by admin on 06.11.2017.
 */
let form = {

    settings: {
        region: $('.hidden__region'),
        btn: $('header .main-menu .btns .btn:first-of-type'),
        form: $('.hidden__region .block-webform-block'),
        closeBtn: $('.hidden__region .block-webform-block .close__btn'),
        mailUs: $('.hidden__region #block-webform'),
        orderForm: $('.hidden__region #block-order'),
        orderBtn: $('.block-system-main-block .layout.layout--twocol .layout__region.layout__region--second a.order'),
        searchBtn: $('header .main-menu .btns .btn:nth-of-type(2)'),
        searchForm: $('form#views-exposed-form-poisk-page-1')
    },

    init: function(){
        let handler = this;
        if(this.settings.orderBtn.length){
            let name = $('h1 span').text().trim();

            this.settings.orderForm.find('.js-form-item-tip input').val(name);
        }
        this.settings.btn.click(()=>{
            handler.showForm(handler.settings.mailUs);

            return false;
        });
        this.settings.region.click(()=>{

            handler.closeForm($('.hidden__region .block-webform-block.active'));
        });
        this.settings.form.click((e)=>{
            e.stopPropagation();
        });
        this.settings.orderForm.click((e)=>{
            e.stopPropagation();
        });
        this.settings.closeBtn.click(()=>{
            handler.closeForm(handler.settings.mailUs);

            return false;
        });
        this.settings.orderBtn.click(()=>{
            handler.showForm(handler.settings.orderForm);

            return false;
        });
        this.settings.searchBtn.click(()=>{
            handler.showSearch();

            return false;
        });
        this.settings.searchForm.click((e)=>{
            e.stopPropagation();
        });
        $('body').click(()=>{
            handler.settings.searchForm.removeClass('active');
        });
    },

    showForm: function(form){
        this.settings.region.animate({
            opacity: 1
        }, 200, ()=>{
            this.settings.region.addClass('active');
        });
        console.log(form);
        form.addClass('active');
    },

    closeForm: function(form){
        this.settings.region.animate({
            opacity: 0
        }, 300, ()=>{
            this.settings.region.removeClass('active');
        });
        form.removeClass('active');
    },

    showSearch: function(){
        this.settings.searchForm.addClass('active');
        this.settings.searchForm.find('input[type="text"]').focus();
    }
};

module.exports = form;