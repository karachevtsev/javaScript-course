/**
 * Получить элементы в обёртке OurJquery
 * @param mixed some селектор || HTMLElement
 * @returns {OurJquery}
 */

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

    /**
     * Получить или задать HTML-код
     * @param string html HTML код
     * @returns this || string, если html === undefined
     */
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