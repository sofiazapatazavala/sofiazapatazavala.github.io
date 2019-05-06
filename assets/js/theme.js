// JS required by the theme to run smoothly. :)
$(function() {

  $(".modal-completo").fadeOut(1000, function(){
    $("body").css("overflow", "inherit");
  });

  $(".logo-menu").click(function(){
    $(".modal-menu").fadeToggle();
  });

  // funciones del sitio anterior
  $("img").addClass("img-fluid");
  $("body.post article.post img").addClass("rounded img-thumbnail d-block mx-auto");
  $("body.home div.card p:first-of-type").addClass("m-0");
  $("body.home div.card img").addClass("card-img-top");

  /* JS puro para Twemoji */
  twemoji.parse(document.body);



});
