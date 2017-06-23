window.addEventListener('load', function(event) {

    var sliderMain = new Slider('.gallery-main .photos img');
    var sliderSecondary = new Slider('.gallery-secondary .photos img');
    
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next') ;

    prevBtn.addEventListener('click', function (event) {
        sliderMain.showPreviousSlide();
    });

    nextBtn.addEventListener('click', function (event) {
        sliderMain.showNextSlide();
    });

    setInterval(function () {
        sliderSecondary.showNextSlide();
    }, 1000);

});

function Slider(img) {
    this.images = document.querySelectorAll(img);
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
}