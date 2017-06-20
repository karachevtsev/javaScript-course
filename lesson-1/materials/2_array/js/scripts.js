window.addEventListener('load', function () {
    
    var towns = ['Moscow', 'London', 'Lviv'];
    var items = document.querySelectorAll('.items .item');

    console.log(towns); /* Array */
    console.log(items); /* NodeList */
    /*
     Обращение к элементами массива
     */
    console.log(towns[1]);

    /*
    Ассоциативный массив - объект
     */
    var capitals = {
        russia: 'Moscow',
        uk: 'London'
    };
    /*
    Обращение к элементами ассоциативного массива
     */
    console.log(capitals['russia']);
    console.log(capitals.russia);

    /*
     Отличие ассоциативного массива (объекта) от массива - у object нет свойства length
     Объект - Набор пар в виде "ключ-значение"
     */
    console.log(towns.length); /* 3 */
    console.log(capitals.length); /* undefined */

    /*
     indexOf - метод arr.indexOf(searchElement[, fromIndex])
     возвращает номер элемента searchElement в массиве arr или -1, если его нет.
     */
    console.log(towns.indexOf('Moscow')); /*  0  */
    console.log(towns.indexOf('no')); /*  -1  */
    items.indexOf('no'); /*  TypeError NodeList не имеет такого свойства */
});
