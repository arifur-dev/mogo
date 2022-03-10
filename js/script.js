$(function(){
    $('.banner-slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,
      });

      $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        pauseOnHover: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },         

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        }
        ]
      });

      $('.counter').counterUp({
        delay: 10,
        time: 2500
    });


    $('.team-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      pauseOnHover: false,

      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    });


    

    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 400){
        $(".navbar").addClass("sticky-menu")
      }

      else{
        $(".navbar").removeClass("sticky-menu")
      }

      if(top > 1500){
        $(".navbar").addClass("cng-color")
      }

      else{
        $(".navbar").removeClass("cng-color")
      }

      if(top > 3000){
        $(".navbar").addClass("cng-color2")
      }

      else{
        $(".navbar").removeClass("cng-color2")
      }

      if(top > 4000){
        $(".navbar").addClass("cng-color3")
      }

      else{
        $(".navbar").removeClass("cng-color3")
      }

    })
})









const nav = document.querySelector("ul")
const navLinks = document.querySelectorAll(".nav-links")
const leftSide = document.querySelector(".left-side-panel")
const hamMenu = document.querySelector(".hamMenu")
const line = document.querySelectorAll(".line")

hamMenu.addEventListener("click", () => {
    nav.classList.toggle("ul-active")
    setTimeout(() => leftSide.classList.toggle("left-side-active"), 300)
    line[0].classList.toggle("line-1-active")
    line[1].classList.toggle("line-2-active")
})

navLinks[0].addEventListener("mouseover",(e) => {
    leftSide.classList.add("bg1")
})
navLinks[0].addEventListener("mouseleave",(e) => {
    leftSide.classList.remove("bg1")
})

navLinks[1].addEventListener("mouseover",(e) => {
    leftSide.classList.add("bg2")
})
navLinks[1].addEventListener("mouseleave",(e) => {
    leftSide.classList.remove("bg2")
})

navLinks[2].addEventListener("mouseover",(e) => {
    leftSide.classList.add("bg3")
})
navLinks[2].addEventListener("mouseleave",(e) => {
    leftSide.classList.remove("bg3")
})