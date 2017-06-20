/*
  Загрузка документа: https://learn.javascript.ru/onload-ondomcontentloaded
*/
window.addEventListener('load', function () {

    /*
     методы поиска элемента в DOM: https://learn.javascript.ru/searching-elements-dom
     - document.querySelector(css-селектор) - вернёт элемент DOM;
     - document.querySelectorAll(css-селектор) - вернёт коллекцию (массив) элементов DOM;
     */

    var items = document.querySelectorAll('.items .item');
    var text = 'add some new text';
    var image = document.querySelector('.img');

    /*
     назначения обработчиков событий: https://learn.javascript.ru/introduction-browser-events
     elem.addEventListener( событие, handler[, phase]), удаление через removeEventListener.
    */

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (event) {
            this.style.color = 'red';
            this.innerHTML += ' ' + text;
        });
    }

    /*
     отменить действие браузера:
     */
    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        console.log(event);
    });

    image.addEventListener('mousedown', function (event) {
        event.preventDefault();
    });
});

