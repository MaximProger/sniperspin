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

  // Слайдер ренды
  $("#brandsSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: true,
      nextArrow: $(".brands__arrow--next"),
      prevArrow: $(".brands__arrow--prev"),
    });

  // Слайдер новости
  $("#newsSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      arrows: true,
      nextArrow: $("#newsNext"),
      prevArrow: $("#newsPrev"),
      asNavFor: "#navNews",
    });

  // Навигация для слайдера
  $("#navNews").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#newsSlider",
    focusOnSelect: true,
  });

  // Слайдер блог
  $("#blogSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      arrows: true,
      nextArrow: $("#blogNext"),
      prevArrow: $("#blogPrev"),
      asNavFor: "#navBlog",
    });

  // Навигация для слайдера
  $("#navBlog").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#blogSlider",
    focusOnSelect: true,
  });
});
