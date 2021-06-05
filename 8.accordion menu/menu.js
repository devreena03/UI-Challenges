$(document).ready(function(){
   $(".navbar ul.menu li a").click(function(){
        $(".navbar ul.menu li").removeClass("active");
        $(this).parent().addClass("active");
   });
});