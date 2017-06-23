window.addEventListener('load', function(e){

    var btnPlus = document.querySelector('input[name=plus]');
    var btnMinus = document.querySelector('input[name=minus]');
    var btnMult = document.querySelector('input[name=mult]');
    var btnDivide = document.querySelector('input[name=divide]');
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');

    btnPlus.addEventListener('click', function() {
        var res = mathOp(inp1.value, inp2.value, '+');
        span.innerHTML = res;
    });

    btnMinus.addEventListener('click', function() {
        var res = mathOp(inp1.value, inp2.value, '-');
        span.innerHTML = res;
    });

    btnMult.addEventListener('click', function() {
        var res = mathOp(inp1.value, inp2.value, '*');
        span.innerHTML = res;
    });

    btnDivide.addEventListener('click', function() {
        var res = mathOp(inp1.value, inp2.value, '/');
        span.innerHTML = res;
    });

});

function mathOp(x, y, op){
    x = parseInt(x);
    y = parseInt(y);
    var res;

    switch(op){
        case '+':
            res = x + y;
            break;
        case '-':
            res = x - y;
            break;
        case '*':
            res = x * y;
            break;
        case '/':
            res = x / y;
            break;
        default:
            alert('Нет такой операции!');
            break;
    }

    return res;
}