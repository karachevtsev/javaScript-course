window.addEventListener('load', function(e) {

    /*
     1. Получить все фотографии в переменную
     2. Получить кнопки в переменную
     3. При клике на кнопку (вперед или назад) скрывать текущий и показывать следующий кадр
     */

    var images = document.querySelectorAll('.photos img');
    var prevBtn = document.querySelector('.prev');
    var nextBtn = document.querySelector('.next') ;
    var imageIndex = 0;

    prevBtn.addEventListener('click', function (event) {
        showPreviousSlide();
    });

    nextBtn.addEventListener('click', function (event) {
        showNextSlide();
    });

    function showPreviousSlide() {
        images[imageIndex].className = '';
        imageIndex--;

        if (imageIndex < 0) {
            imageIndex = images.length - 1;
        }

        images[imageIndex].className = 'showed';
    }
    
    function showNextSlide() {
        images[imageIndex].className = '';
        imageIndex++;

        if (imageIndex >= images.length) {
            imageIndex = 0;
        }

        images[imageIndex].className = 'showed';
    }
});