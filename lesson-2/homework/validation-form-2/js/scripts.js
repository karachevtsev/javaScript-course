window.addEventListener('load', function(e) {

    form.firstName.onchange = nameOnChange;
    form.email.onchange = emailOnChange;
    form.phone.onchange = phoneOnChange;

    function validate(elem, pattern) {
        var res = elem.value.search(pattern);
        
        if (res === -1) {
            elem.className = 'error';
        }
        else {
            elem.className = 'success';
        }
    }

    function nameOnChange() {
        var pattern = /\S/;
        validate(this, pattern);
    }

    function emailOnChange() {
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        validate(this, pattern);
    }

    function phoneOnChange() {
        var pattern = /\d{10}/;
        validate(this, pattern);
    }

    form.addEventListener('submit',  function (event) {
        var invalid = false;

        for (var i = 0; i < form.elements.length; ++i) {
            var e = form.elements[i];
            if (e.type === 'text' && e.onchange) {
                e.onchange();
                if (e.className === 'error') {
                    invalid = true;
                }
            }
        }

        if (invalid) {
            event.preventDefault();
            alert("Допущены ошибки при заполнении формы.");
        }
    })

});