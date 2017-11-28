$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").slideToggle();
  });
});

// $(function)(){
//   $("p").click(function(){
//     $("img").show();
//   });
// });
