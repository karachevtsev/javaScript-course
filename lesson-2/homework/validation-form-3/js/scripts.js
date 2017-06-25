window.addEventListener('load', function() {

    var form = document.querySelector('#form');
    var formValidation = false;

    /* установка обработчиков для форм и элементов форм */
    for (var i = 0; i < form.elements.length; i++) {
        var e = form.elements[i];

        /* пропускаем все что не поле ввода */
        if (e.type !== 'text') {
            continue;
        }

        var pattern = e.getAttribute('data-val');

        if (pattern) {
            e.oninput = validateInput; /* установим обработчик на изменение */
            formValidation = true; /* флаг, который показывает, что форма требует проверку */
        }
    }
    
    if (formValidation) {
        /*
         если formValidation === true, т.е. форма требует проверки,
         то на событие формы onsubmit ставим обработчик - функцию validateForm
         */
        form.onsubmit = validateForm; // установка обработчика для формы на submit
    }

    /* обработчик на изменение содержимого полей ввода */
    function validateInput() {
        /*
         к атрибутам data- можно обратиться не только
         как к атрибутам, но и как к свойствам,
         при помощи специального свойства dataset
         */
        var pattern = this.dataset.val;
        var msg = this.dataset.valMsg;
        var msgId = this.dataset.valMsgId;
        var value = this.value;
        var res = value.search(pattern);
        /*
         тут мы в переменной value пытаемся найти подстроку
         по указанному шаблону pattern, если не находим, то получим значение res = -1
         */
        if (res === -1) {
            document.getElementById(msgId).innerHTML = msg;
            this.className = 'error';
        } else {
            document.getElementById(msgId).innerHTML = '';
            this.className = 'valid';
        }
    }

    /* обработчик на submit формы */
    function validateForm() {
        /*
         делаем изначально предположение, что форма
         заполненеа правильно
         */
        var invalid = false;

        for (var i = 0; i < this.elements.length; i++) {
            var e = form.elements[i];

            if (e.type === 'text' && e.onchange !== null) {
                e.onchange();

                if (e.className === 'error') {
                    invalid = true;
                }
            }
        }

        if (invalid) {
            alert("Допущены ошибки при заполнении формы!");
            return false;
        } else {
            alert('Регистрация завершена!');
        }
    }

});