$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".wrapper").toggleClass("collapse");   
     });
     $(".sidebar ul li a").click(function(){
        $(".sidebar ul li a").removeClass("active");
        $(this).addClass("active");
    });
});