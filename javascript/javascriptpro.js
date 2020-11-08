$(document).ready(function(){
    $("i.icon").click(function(){
        $("ul").slideToggle();
    });
    $(window).scroll(function(){
        var sc=$(window).scrollTop();
        if(sc>50){
            $("header").addClass("colornav")
        }else{
            $("header").removeClass("colornav")
        }
        if(sc >1500){
            $('.timer').countTo();
            $(window).off("scroll")
        }
        if(sc> 500){
            $(".scrolltop").fadeIn()
        }else{
            $(".scrolltop").hide()
        }
    });
    $(".port-btn button").click(function(){
        $(this).addClass("changebg").siblings().removeClass("changebg")
        var x=$(this).attr("id");
        if(x==="ALL"){
            $(".port-image > div").fadeIn();
        }else{
            $(".port-image > div").fadeOut();
            $(".port-image").contents().filter("." + x).fadeIn();
        }
    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })

    $(".list-chose li").click(function(){
        $(this).addClass("changebg").siblings().removeClass("changebg")
        var ben=$(this).attr("id")
        $(".c-ifo").hide()
        $(".contnet-chose").contents().filter("#"+ben).fadeIn()
    
    })
$('.pop').magnificPopup({
  type: 'iframe'});
  
$('.your-class').slick({
    nextArrow:false,
    prevArrow:false,
});
$(".scrolltop").click(function(){
    $('body,html').animate({
        scrollTop:0
    },500)
})
$(".nav-list a").click(function(){
    $("html,body").animate({
        scrollTop:$($(this).attr("href")).offset().top - 80
    },1000)
})


});
