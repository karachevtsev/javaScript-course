window.addEventListener('load', function(e) {

    var form = document.querySelector('#form');
    var inputs = document.querySelectorAll('.form-input');

    form.addEventListener('submit', function (e) {
        var isValid = true;

        for (var i = 0; i < inputs.length; i++) {
            var element = inputs[i];

            if (element.value.length === 0 ) {
                isValid = false;
                element.classList.add('error');
            }
            else {
                element.classList.remove('error');
                element.classList.add('success');
            }
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            alert('Ваше сообщение отпрвлено!')
        }
    });

});