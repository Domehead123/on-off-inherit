$( document ).ready(function() {
   
   $( ".box span" ).click(function() {
  $(this).addClass("white");
  $(this).siblings().removeClass("white");
  
  if ($( this ).hasClass("on")){
      $(this).parents(".box").addClass("red").removeClass("off").removeClass("inherit").addClass("on");
      $(this).parents(".box").nextUntil(".off").addClass("red");
  }
  if ($( this ).hasClass("off")){
      $(this).parents(".box").removeClass("red").addClass("off").removeClass("inherit").removeClass("On");
      $(this).parents(".box").nextUntil(".on").removeClass("red");
  }
  
  if ($( this ).hasClass("inherit")){
      $(this).parents(".box").addClass("inherit").removeClass("off").removeClass("On");
      if ($(this).parents(".box").prev().hasClass("red")) {
          $(this).parents(".box").addClass("red");
          $(this).parents(".box").nextUntil(".off").addClass("red");
          
      }
      
      else {
          $(this).parents(".box").removeClass("red");
          $(this).parents(".box").nextUntil(".on").removeClass("red");
      }
  }
  
  
  
});




});