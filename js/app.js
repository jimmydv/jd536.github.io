$(document).ready(function(){
    $(".items").mouseenter(function(){
         let overlay = $(this).find(".items-overlay");  
        
           
            overlay.fadeIn("slow");
        });
        
     $(".items").mouseleave(function(){
            let overlay = $(this).find(".items-overlay");  
            overlay.fadeOut("slow");
     });
    
 });
$(function(){

  $('.circlechart').circlechart();

});