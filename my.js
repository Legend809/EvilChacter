$(document).ready(function(){
    $('.vd').click(function(){
        $('.img-area').hide();
        $('.video-area').show();
    });

    $('.img').click(function(){
        $('.img-area').show();
        $('.video-area').hide();
    });

    $('.submit').click(function(){
        $('.img-show').show();
        $('.form').hide();
    });
});