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


var moreBtn = $("#readMore").click(function(){
    $("#readMoreDots").hide();
    $("#more").show();
    if(moreBtn.text()==="More"){
    moreBtn.text("Less");
    }else{
        moreBtn.text("More");
        $("#more").hide();
        $("#readMoreDots").show();
    }
});

    
    
