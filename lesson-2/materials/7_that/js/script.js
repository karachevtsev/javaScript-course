window.onload = function () {

    var sl = new Slider('.gallery-1 .photos img');

    var btn_prev = document.querySelector('.gallery-1 .buttons .prev');
    var btn_next = document.querySelector('.gallery-1 .buttons .next');

    btn_prev.onclick = sl.prev;
    btn_next.onclick = sl.next;
    
    var sl2 = new Slider('.gallery-2 .photos img');
    
    setInterval(sl2.next, 1000);
}

function Slider(img) {
    this.images = document.querySelectorAll(img);
    this.i = 0;
    var slider = this;

    this.prev = function () {
        slider.images[slider.i].classList.remove('showed');
        slider.i--;

        if (slider.i < 0) {
            slider.i = slider.images.length - 1;
        }

        slider.images[slider.i].classList.add('showed');
    }

    this.next = function () {
        slider.images[slider.i].classList.remove('showed');
        slider.i++;

        if (slider.i >= slider.images.length) {
            slider.i = 0;
        }

        slider.images[slider.i].classList.add('showed');
    }
}