window.onload = function () {

    var sl = new Slider({
        images: '.gallery-1 .photos img',
        btnPrev: '.gallery-1 .buttons .prev',
        btnNext: '.gallery-1 .buttons .next'
        // rate: 1000,
        // autoMode: true
    });

    sl.run();

};

/*
    options.images      '.gallery-1 .photos img'
    options.btnPrev     '.gallery-1 .buttons .prev'
    options.btnNext     '.gallery-1 .buttons .next'
    options.rate        1000
    options.autoMode    true
*/

function Slider(options) {
    this.images = document.querySelectorAll(options.images);
    this.prev = document.querySelector(options.btnPrev );
    this.next = document.querySelector(options.btnNext);

    this.i = 0;


    this.prev = function () {
        this.images[this.i].classList.remove('showed');
        this.i--;

        if (this.i < 0) {
            this.i = this.images.length - 1;
        }

        this.images[this.i].classList.add('showed');
    };

    this.next = function () {
        this.images[this.i].classList.remove('showed');
        this.i++;

        if (this.i >= this.images.length) {
            this.i = 0;
        }

        this.images[this.i].classList.add('showed');
    };

    this.run = function () {
        var slider = this;
        
        btnPrev.addEventListener('click', function () {
            slider.prev();
        });

        btnNext.addEventListener('click', function () {
            slider.next();
        });

    }
}