$(document).ready(function(){
    var items = $(".items");
 items.mouseenter(function(){
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


var moreBtn = $("#readMore").click(function(){
    $("#readMoreDots").fadeOut("slow");
    $("#more").slideDown("slow");
    if(moreBtn.text()==="More"){
    moreBtn.text("Less");
    }else{
        moreBtn.text("More");
        $("#more").slideUp("slow");
        $("#readMoreDots").fadeIn("slow");
    }
});

    
    
