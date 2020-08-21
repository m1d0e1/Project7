/// <reference path="typings/globals/jquery/index.d.ts" />
$(function () {
  $("header").height($(window).innerHeight());
  // Go Down
  $(".down").on("click", function () {
    $("html").animate(
      {
        scrollTop: $(".features").offset().top,
      },
      1000
    );
  });

  //Go To Hire
  $(".hire").on("click", function () {
    $("html").animate(
      {
        scrollTop: $(".contact").offset().top,
      },
      1500
    );
  });
  //show hidden
  $(".show").on("click", function () {
    $(".hidee").toggleClass("hidden1");
    if (!$(".hidee").hasClass("hidden1")) {
      $(".hidee").fadeIn(300);
      $(".show").text("HIDE THEM");
    } else {
      $(".hidee").fadeOut(300);
      $(".show").text("SHOW MORE");
    }
  });
  //Nice Scroll
  $("html").niceScroll({
    cursorcolor: "#F7600E",
    cursorwidth: "7px",
    smoothscroll: "true",
    autohidemode: "false",
    cursorborder: "1px solid #F7600E",
    zindex: "99999",
  });

  //Slider Function
  $(".right").on("click", function () {
    $(".left").fadeIn(300);
    $(".slide.active")
      .removeClass("active")
      .fadeOut(300, function () {
        $(this).delay(300).next().fadeIn(300).addClass("active");
        if ($(this).next().is(":last-child")) {
          $(".right").fadeOut(300);
        }
      });
  });
  $(".left").on("click", function () {
    $(".slide.active")
      .removeClass("active")
      .fadeOut(300, function () {
        $(this).prev().fadeIn(300).addClass("active");
        if ($(this).prev().is(":first-child")) {
          $(".left").fadeOut(300);
        }
        if (!$(this).next().is(":last-child")) {
          $(".right").fadeIn(300);
        }
      });
  });
});
