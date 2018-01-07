$(document).ready(function() {
  $(".menu").hide();
  $(".cross").hide();

  $(".hamburger").click(function() {
    $(".menu").slideToggle();
    $(".hamburger").hide();
    $(".cross").show();
  });

  $(".cross").click(function() {
    $(".menu").slideToggle();
    $(".hamburger").show();
    $(".cross").hide();
  });

});
