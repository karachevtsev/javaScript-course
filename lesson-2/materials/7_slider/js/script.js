window.addEventListener('load', function(event) {

    var sliderMain = new Slider({
        images: '.gallery-main .photos img',
        prevBtn: '.gallery-main .prev',
        nextBtn: '.gallery-main .next'
        // rate: 0
        // autoMode: true
    });

    sliderMain.init();

    var sliderSecondary = new Slider({
        images: '.gallery-second .photos img',
        prevBtn: '.gallery-second .prev',
        nextBtn: '.gallery-second .next'
        // rate: 0
    });

    sliderSecondary.init();

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
        var _self = this;

        this.prevBtn.addEventListener('click', function (event) {
            _self.showPreviousSlide();
        });

        this.nextBtn.addEventListener('click', function (event) {
            _self.showNextSlide();
        });

        // this.rate = setInterval(function () {
        //     _self.showNextSlide();
        // }, options.rate);
    };

}