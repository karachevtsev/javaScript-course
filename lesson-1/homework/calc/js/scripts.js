window.addEventListener('load', function(e){

    var btn = document.querySelector('input[name=calc]');
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var inputs = document.querySelectorAll('input[type=text]');
    var span = document.querySelector('.res');

    btn.addEventListener('click', function() {
        var result = 0;
        
        result = parseInt(inp1.value) + parseInt(inp2.value);
        span.innerHTML = result;

        // The DOM property - called disabled and is a boolean that takes true or false
        this.disabled = true;

        //this.setAttribute('disabled', 'disabled');
        //this.removeAttribute('disabled');
    });

    for (var i = 0; i < inputs.length; i++ ) {
        inputs[i].oninput = function (e) {
            btn.disabled = false;
        }
    }

});

