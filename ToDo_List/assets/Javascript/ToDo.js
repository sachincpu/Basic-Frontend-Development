//Check Off Specific ToDo's By Clicking
$("ul").on("click", "li", function(){
   /* if($(this).css("color")==="rgb(128, 0, 128)")
        {
         $(this).css({
         color : "red",
         textDecoration : "none"
        }) ;
        }
    else{
         $(this).css({
         color : "purple",
         textDecoration : "line-through"
        }) ;
        }*/
    $(this).toggleClass("completed");
});

//Click on X to delete specific todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
      $(this).remove();
  });
   event.stopPropagation(); 
});
 
$("input[type='text'").keypress(function(event){
     if(event.which===13)
         {
             //grabbing the entered value
             var todoText=$(this).val();
             
             //clearing the text box
             $(this).val("");
             //create a new li
             $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
         }
});
$(".fa-clipboard-check").click(function(){
    $("input[type='text'").fadeToggle();
});