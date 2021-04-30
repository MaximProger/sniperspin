$(document).ready(function () {
  // Навигация
  $(".nav__item").on("click", function (evt) {
    evt.preventDefault();
    $(this).toggleClass("nav__item--active");
  });

  // Бургер меню
  $("#burgerBtn").click((evt) => {
    evt.preventDefault();
    $("#dropdownMenu").slideToggle();
  });

  // // Слайдер интро
  $("#introSlider").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    autoplay: true,
    arrows: false,
    asNavFor: "#introNav",
  });

  // Навигация для слайдера
  $("#introNav").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 6,
    asNavFor: "#introSlider",
    focusOnSelect: true,
  });
});
