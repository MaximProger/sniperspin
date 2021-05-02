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

  // Слайдер бренды
  $("#brandsSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      infinite: true,
      nextArrow: $(".brands__arrow--next"),
      prevArrow: $(".brands__arrow--prev"),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            centerMode: false,
          },
        },
      ],
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
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            arrows: false,
          },
        },
      ],
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
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            arrows: false,
          },
        },
      ],
    });

  // Навигация для слайдера
  $("#navBlog").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 5,
    asNavFor: "#blogSlider",
    focusOnSelect: true,
  });

  // Макса для телефона
  $("#phone").mask("+7 (999) 999 - 9999");

  // Молальное окно
  $(".mask").click(() => {
    $(".mask").fadeOut();
    $("#recallModal").slideUp(300);
    $("html").removeClass("noscroll");
  });

  $(".recall").click((evt) => {
    evt.preventDefault();
    $(".mask").fadeIn();
    $("#recallModal").slideDown(500);
    var curScrollTop = $(window).scrollTop();
    $("html")
      .addClass("noscroll")
      .css("top", "-" + curScrollTop + "px");
  });

  $(".modal__close").click((evt) => {
    evt.preventDefault();
    $(".modal").slideUp(300);
    $(".mask").fadeOut();
    $("html").removeClass("noscroll");
  });

  // Кнопка наверх
  var button = $("#buttonUp");
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on("click", function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  // Поиск
  if ($(window).width() <= "1199") {
    $("#searchHeaderInput").attr("placeholder", "Введите текст для поиска");
  }

  $("#openSearch").click((evt) => {
    $("#searchHeader").slideToggle();
  });
});
