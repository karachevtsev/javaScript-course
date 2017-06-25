/**
 * Получить элементы в обёртке OurJquery
 * @param mixed some селектор || HTMLElement
 * @returns {OurJquery}
 */
function $(some){
    var elements;

    if(typeof some === "object") {
        elements = [some];
    }
    else{
        elements = document.querySelectorAll(some);
    }
    
    return new OurJquery(elements);
}

function OurJquery(elements) {
    this.elements = elements;

    this.on = function (eventname, f) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventname, f);
        }
        
        return this;
    }
    
    this.addClass = function(classname){
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(classname);
        }
        
        return this;
    }
    
    this.removeClass = function(classname){
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(classname);
        }
        
        return this;
    }
    
    /**
     * Получить или задать HTML-код
     * @param string html HTML код
     * @returns this || string, если html === undefined
     */
    this.html = function(html){
        if(typeof html === "undefined"){
            return this.elements[0].innerHTML;
        }
        
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = html;
        }
        
        return this;
    }
    
    this.fadeOut = function(time, callback){
        /* 
         * плавно уменьшает opacity с 1 до 0
         * после делает display: none
         * http://beta.dmitrylavrik.ru/blog/javascript/basics/prostaya-animaciya-na-javascript
         * 
         * 
         * (*) callback вызывается после скрытия элемента :)
         * (**) callback вызывается в контексте правильном :)
         * 
         * */
        
        
    }
}