window.addEventListener('load', function(event) {

    var sliderMain = new Slider({
        images: '.gallery-main .photos img',
        prevBtn: '.gallery-main .prev',
        nextBtn: '.gallery-main .next',
        autoMode: false
    });

    sliderMain.init();
    console.log(sliderMain);

    var sliderSecondary = new Slider({
        images: '.gallery-second .photos img',
        prevBtn: '.gallery-second .prev',
        nextBtn: '.gallery-second .next'
    });

    sliderSecondary.init();
    console.log(sliderSecondary)

});

function Slider(options) {
    this.images = document.querySelectorAll(options.images);
    this.prevBtn = document.querySelector(options.prevBtn);
    this.nextBtn = document.querySelector(options.nextBtn) ;
    this.imageIndex = 0;

    this.showPreviousSlide = function () {
        this.images[this.imageIndex].className = '';
        this.imageIndex--;

        if (this.imageIndex < 0) {
            this.imageIndex = this.images.length - 1;
        }

        this.images[this.imageIndex].className = 'showed';
    };

    this.showNextSlide = function() {
        this.images[this.imageIndex].className = '';
        this.imageIndex++;

        if (this.imageIndex >= this.images.length) {
            this.imageIndex = 0;
        }

        this.images[this.imageIndex].className = 'showed';
    };


    this.init = function () {
        /*
         Допилить дефолтный настройки слайдера!
         
         Дефолтные настройки описываем в рамках
         ассотивативного массива и в нем описываются ключи,
         которые и задают наше дефолтное поведение.
         */
        var _self = this;

        var defaultOptions = {
            autoMode: true,
            interval: 2000
        };

        /*
         Обязательно надо гарантировать,что в options
         будут все ключи!
         Цикл перебирает все свойства defaultOptions по именам,
         проверяет переданы ли они через options,
         и если нет — ставит значение из defaultOptions.
         */
        for (var option in defaultOptions) {
            options[option] = options && options[option] !== undefined ? options[option] : defaultOptions[option];
        }

        this.prevBtn.addEventListener('click', function (event) {
            _self.showPreviousSlide();
        });

        this.nextBtn.addEventListener('click', function (event) {
            _self.showNextSlide();
        });

        if (options.autoMode === true) {
            setInterval(function () {
                 _self.showNextSlide();
            }, options.interval);
        }
    };

}