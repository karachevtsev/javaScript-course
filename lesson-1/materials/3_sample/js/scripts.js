/*
 Атрибуты и DOM-свойства https://learn.javascript.ru/attributes-and-custom-properties
 */

window.addEventListener('load', function () {
    
    var items = document.querySelectorAll('.items .item');
    var sum = document.querySelector('.sum');

    /*
     Свойство classList – это объект для работы с классами.
     */
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (event) {
            this.classList.toggle('item--active');
            calcSum();
        });
    }
    
    function calcSum(){
        var result = 0;
        
        for(var i = 0 ;i < items.length; i++) {
            if (items[i].classList.contains('item--active')) {
                /*
                 getAttribute - вернет строку, поэтому используем parseInt
                 Функция parseInt и ее аналог parseFloat преобразуют строку символ за символом, пока это возможно.
                 */
                result += parseInt(items[i].getAttribute('data-price'));
            }
        }
        
        sum.innerHTML = result + ' ' + 'грн';
    }
});
