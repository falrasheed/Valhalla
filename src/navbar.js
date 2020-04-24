$(document).ready(toggleNavCollapse);

$(window).scroll(toggleNavCollapse);

$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
    if (!pagePositionScrolled()) {
      $(".navbar-fixed-top").toggleClass("navbar-transform");
      toggleColour("black");
    }
    window.setTimeout(toggleBurger, 400);
  });
});

function pagePositionScrolled() {
  if ($(".navbar").offset().top > 100) { return true} else { return false}
}

function toggleNavCollapse() {
  if (pagePositionScrolled() &! $("#burger").hasClass("active")) {
    $(".navbar-fixed-top").removeClass("navbar-transform");
    toggleColour(returnColour(pagePositionScrolled()));
    $(".navbar-default").css({"background-color": "white", "border-color": "#eeeeff"});
  } else if (!$("#burger").hasClass("active")){
    $(".navbar-fixed-top").addClass("navbar-transform");
    toggleColour(returnColour(pagePositionScrolled()));
    $(".navbar-default").css({"background-color": "transparent", "border-color": "transparent"});
  }
}

function returnColour(requirement) {
  if (requirement) { return "black"} else { return "white"}
}

function toggleColour(colour) {
  $(".navbar-default .navbar-nav li a").css("color", colour);
  $(".navbar-default .navbar-brand").css("color", colour);
  $(".navbar-toggle .icon-bar").css("background-color",colour);
}

function toggleBurger() {
  colour = returnColour(pagePositionScrolled())

  if ($("#burger").hasClass("active")){
    $(".navbar-toggle.active .icon-bar:nth-of-type(1)").css({"background-color": "black", "top": "6px", "transform": "rotate(45deg)"});
    $(".navbar-toggle.active .icon-bar:nth-of-type(2)").css({"background-color": "transparent"});
    $(".navbar-toggle.active .icon-bar:nth-of-type(3)").css({"background-color": "black", "top": "-6px", "transform": "rotate(-45deg)"});
    $(".navbar-default").css({"background-color": "white", "border-color": "#eeeeff"});
  } else {
    $(".navbar-toggle .icon-bar:nth-of-type(1)").css({"background-color": colour, "top": "", "transform": ""});
    $(".navbar-toggle .icon-bar:nth-of-type(2)").css({"background-color": colour});
    $(".navbar-toggle .icon-bar:nth-of-type(3)").css({"background-color": colour, "top": "", "transform": ""});
    $(".navbar-default").css({"background-color": "transparent", "border-color": "transparent"});
    toggleColour(returnColour(pagePositionScrolled()));
  }
}
