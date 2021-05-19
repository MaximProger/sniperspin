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
    $("#burgerBtn").toggleClass("header__burger--active");
  });

  $("#menuBtn").click((evt) => {
    evt.preventDefault();
    if ($("#menuBtn").hasClass("header__burger--active")) {
      $("#menuBtn").removeClass("header__burger--active");
      $(".menu").slideUp();
      $("html").removeClass("noscroll");
    } else {
      $("#menuBtn").addClass("header__burger--active");
      $("html").addClass("noscroll");
      $("#menu").slideDown();
    }
  });

  $(window).click((evt) => {
    const target = evt.target;
    if (
      !target.closest(".dropdown--desktop") &&
      !target.closest(".header__burger")
    ) {
      $("#dropdownMenu").slideUp();
    }
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
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            arrows: false,
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
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
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
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
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

  // Модальное окно
  $(".mask").click(() => {
    $(".mask").fadeOut();
    $("#recallModal").slideUp(300);
    $("html").removeClass("noscroll");
  });

  $(".recall").click((evt) => {
    evt.preventDefault();
    $(".mask").fadeIn();
    $("#recallModal").slideDown(500);
    $("html").addClass("noscroll");
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

  // Дропдаун телефон
  $("#catalogMenu .dropdown__item").click(function (evt) {
    evt.preventDefault();

    const dropdownItemParent = $(this).parents(".dropdown__link");
    const dropDownInnerList = dropdownItemParent.find(".dropdown__inner__list");

    if ($(this).hasClass("dropdown__item--active")) {
      $(this).removeClass("dropdown__item--active");
      dropDownInnerList.slideUp();
    } else {
      $("#catalogMenu .dropdown__item").removeClass("dropdown__item--active");
      $("#catalogMenu .dropdown__inner__list").slideUp();
      $(this).addClass("dropdown__item--active");
      dropDownInnerList.slideDown();
    }
  });

  // Попап кнопка "Назад"
  $(".menu__back").click(function (evt) {
    evt.preventDefault();
    $(this).parents(".menu").slideUp();
  });

  $("#menu div.dropdown__item").click(function (evt) {
    const neededId = "#" + $(this).data("menu");
    $(neededId).slideDown();
  });

  // Показать текст в описании
  $("#showText").click((evt) => {
    evt.preventDefault();
    $(".description__hidden").slideDown();
    $(".description__more").fadeOut();
  });

  // Показать ещё в товарах
  $("#showPopular").click((evt) => {
    evt.preventDefault();
    $(".popular__item--hide").slideDown(700);
    $(".popular__item").css({ display: "flex" });
    $(".popular__btn__wrapper").hide();
  });

  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("header--fixed");
    } else {
      header.removeClass("header--fixed");
    }
  }

  // Новости "Показать ещё"
  $("#showNews").click((evt) => {
    evt.preventDefault();
    $("#showNews").fadeOut(500);
    $(".blog__item").removeClass("blog__item--hide");
  });

  if ($(window).width() <= "1199") {
    $("#newsInnerRight")
      .not(".slick-initialized")
      .slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        arrows: false,
        centerMode: false,
        asNavFor: "#navNewsInnerRight",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            },
          },
        ],
      });

    // Навигация для слайдера
    $("#navNewsInnerRight").not(".slick-initialized").slick({
      arrows: false,
      slidesToShow: 2,
      asNavFor: "#newsInnerRight",
      focusOnSelect: true,
    });
  }

  $("#newsDetailSlider")
    .not(".slick-initialized")
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      arrows: true,
      nextArrow: $(".news__detail__nav__btn--next"),
      prevArrow: $(".news__detail__nav__btn--prev"),
      centerMode: false,
      asNavFor: "#navNewsDetail",
    });

  $("#navNewsDetail").not(".slick-initialized").slick({
    arrows: false,
    slidesToShow: 3,
    asNavFor: "#newsDetailSlider",
    focusOnSelect: true,
  });

  $(".comments__item__btn").click(function (evt) {
    evt.preventDefault();
    const thisReport = $(this)
      .parents(".comments__body")
      .find(".comments__body__report");
    thisReport.toggleClass("comments__body__report--active");
  });
});
