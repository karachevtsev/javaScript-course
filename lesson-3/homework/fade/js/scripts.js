$(window).on('load', function (e) {

    $('.item').on('click', function() {
        $(this).fadeOut(2000, function() {
            console.log(this);
            alert('Hello! I am callback!')
        });
    });

});