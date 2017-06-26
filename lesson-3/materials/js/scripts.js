$(window).on('load', function (e) {
    /*
    функция $ возвразает объект $('.items .item')
    у котрого есть метод on
    в jQuery реализованы цепочки вида $(selector).addClass(className).on(eventname, f),
    т.е. функции addClass, on - тоже вернули себя самих
     */
    $('.items .item').on('click', function () {
        $(this).html('2');
    });

    $('.items .item').html('jQuery');

    $('.items .item').addClass('shadow').html('magic');

    $('.test .check').on('focus', function () {
        this.classList.add('focus');
    });

});