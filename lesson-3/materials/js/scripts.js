$(window).on('load', function(e){
 
    $('.items .item').on('click', function(){
        $(this).fadeOut(200);
    }).addClass('shadow').html('123');
    
    console.log($('.items .item').html('123'));
    console.log($('.items .item').html());
    
    $('.test .check').on('focus', function(){
        this.classList.add('focus');
    }).on('blur', function(){
        this.classList.remove('focus');
    });

});