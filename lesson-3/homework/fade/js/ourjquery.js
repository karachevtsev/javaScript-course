function $(some) {
    var elements;

    if (typeof some === 'object') {
        elements = [some];
    } else {
        elements = document.querySelectorAll(some);
    }

    return new OurJquery(elements)
}

function OurJquery(elements) {

    this.elements = elements;

    this.on = function (eventname, f) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventname, f);
        }

        return this;
    };

    this.fadeOut = function(duration, callback) {
        /*
         * плавно уменьшает opacity с 1 до 0
         * после делает display: none
         * http://beta.dmitrylavrik.ru/blog/javascript/basics/prostaya-animaciya-na-javascript
         * (*) callback вызывается после скрытия элемента :)
         * (**) callback вызывается в контексте правильном :)
         *
         */
        for (var i = 0; i < this.elements.length; i++) {
            fade(this.elements[i], duration, callback)
        }

        function fade(element, duration, callback) {
            // кадров в секунду (по умолчанию 50)
            var fps = 50;
            // время работы анимации (по умолчанию 500мс)
            var time = duration || 500;
            // сколько всего покажем кадров
            var steps = time / fps;
            // текущее значение opacity - изначально 0
            var op = 1;
            // изменение прозрачности за 1 кадр
            var d0 = op / steps;
            
            var funcCallback = callback || function () {};

            // устанавливаем интервал (1000 / fps)
            // например, 50fps -> 1000 / 50 = 20мс
            var timer = setInterval(function() {
                // уменьшаем текущее значение opacity
                op -= d0;
                // устанавливаем opacity элементу DOM
                element.style.opacity = op;
                // уменьшаем количество оставшихся шагов анимации
                steps--;

                // если анимация окончена
                if (steps <= 0) {
                    // убираем интервал выполнения
                    clearInterval(timer);
                    // и убираем элемент из потока документа
                    element.style.display = 'none';
                    // полностью выполнили действие и вызвали коллбек 
                    funcCallback.call(element);
                }

            }, (1000 / fps));
        }
    };

    this.addClass= function (className) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className);
        }

        return this;
    };

    this.removeClass= function (className) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(className);
        }

        return this;
    };

    this.html= function (html) {
        if (typeof html === "undefined") {
            return this.elements[0].innerHTML;
        }
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = html;
        }

        return this;
    };

}