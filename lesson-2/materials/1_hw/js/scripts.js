window.addEventListener('load', function(e){

    var btn = document.querySelector('input[name=calc]');
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    btn.addEventListener('click', function(){

        var res = parseInt(inp1.value) + parseInt(inp2.value);
        span.innerHTML = res;
        btn.disabled = true;

    });

    inp1.addEventListener('input', btnControl);
    inp2.addEventListener('input', btnControl);

    function btnControl(){
        btn.disabled = false;
    }
});
