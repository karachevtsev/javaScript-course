window.addEventListener('load', function(e) {

    var links = document.querySelectorAll('a[target=_blank]');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', confirmAway);
    }

    function confirmAway(e){
        if (!confirm('Мы не гарантируем, что Вы переходите на какой-то сайт. Перейти?')) {
            e.preventDefault();
        }
    }

});

/*
 * confirm
 * prompt
 * alert
 */
