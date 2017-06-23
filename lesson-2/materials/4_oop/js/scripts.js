window.addEventListener('load', function (e) {

    /*
    Создадим экземпляры класса класса Cat
     */
    var cat1 = new Cat('Мурзик');
    var cat2 = new Cat('Мурзик2');
    var cat3 = new Cat('Мурзик3');

    cat1.eat();
    cat1.eat();
    cat1.eat();
    cat2.eat();
    cat2.eat();
    cat2.run();

    console.log(cat1);
    console.log(cat2);
    console.log(cat3);

});

/*
Класс Cat
Объект - экземпляр класса Cat
 */
function Cat(name) {
    this.name = name;
    this.weight = 0;

    this.run = function () {
        this.weight--;
    };

    this.eat = function () {
        this.weight++;
    };
}