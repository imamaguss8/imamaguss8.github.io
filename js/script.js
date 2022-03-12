AOS.init();

// GSAP
gsap.from(".jumbotron .dp", {
  duration: 2,
  rotateY: 360,
  opacity: 0,
});

gsap.from(".navbar", {
  duration: 2,
  y: "-100%",
  opacity: 0,
  ease: "bounce",
});

gsap.from("menu", {
  duration: 2,
  y: "-100%",
  opacity: 0,
  ease: "bounce",
});

// END OF GSAP

// splash
const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 3000);
});

// typing who am i
var options = {
  strings: ["Web Developer", "Technician", "Freelancer"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
};

var typed = new Typed(".element", options);

// MENU
const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});

$(".trigger").on("click", function () {
  document.body.classList.toggle("open");
  if (document.body.classList.contains("open")) {
    $(".trigger i").addClass("bi-plus");
  } else {
    $(".trigger i").removeClass("bi-plus");
  }
});
// /MENU

// TOP BUTTTON
const scroll = document.querySelectorAll(".scrollspy");
const toTop = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 125) {
    toTop.classList.add("active");
    $(".jumbotron p").css({
      // filter: "invert(0)",
    });
  } else {
    toTop.classList.remove("active");
    $(".jumbotron p").css({
      // filter: "invert(1)",
    });
  }
});

// parallax jumbotron
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  // jumbotron - dp
  $(".jumbotron .dp").css({
    transform: "translate(0, " + wScroll / 4 + "%)",
  });

  // jumbotron - h1
  $(".jumbotron h1").css({
    transform: "translate(0, " + wScroll / 2 + "%)",
  });

  // jumbotron - p
  $(".jumbotron p").css({
    transform: "translate(0, " + wScroll / 2 + "%)",
    // filter: "invert(1)",
  });
});

// parallax about
$(window).on("load", function () {
  $("#about p").addClass("show");
  $(".dg").addClass("show");
});

// parallax portfolio
// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();
//   if (wScroll > $("#portfolio").offset().top - 450) {
//     $("#portfolio .thumbnail").each(function (i) {
//       setTimeout(function () {
//         $("#portfolio .thumbnail").eq(i).addClass("muncul");
//       }, 300 * (i + 1));
//     });
//   }
// });

// Menyesuaikan offset navlink dengan berbagai tampilan device
function scrollMe(x) {
  if (x.matches) {
    // Jika kueri media cocok
    $(".page-scroll").on("click", function (e) {
      var dest = $(this).attr("href");
      var elemenDest = $(dest);

      // menggunakan view mobile phone ke atas
      $("html, body").animate({
        scrollTop: elemenDest.offset().top - 185,
      });

      e.preventDefault();
    });
  } else {
    $(".page-scroll").on("click", function (e) {
      var dest = $(this).attr("href");
      var elemenDest = $(dest);

      $("html, body").animate({
        scrollTop: elemenDest.offset().top - 115,
      });

      e.preventDefault();
    });
  }
}

var x = window.matchMedia("(min-width: 768px)");
scrollMe(x); // Panggil fungsi listener pada saat dijalankan
x.addListener(scrollMe); // Lampirkan fungsi listener pada perubahan status

function scrollMe(xx) {
  if (xx.matches) {
    // Jika kueri media cocok
    $(".page-scroll").on("click", function (e) {
      var dest = $(this).attr("href");
      var elemenDest = $(dest);

      // menggunakan view mobile phone ke atas
      $("html, body").animate({
        scrollTop: elemenDest.offset().top - 180,
      });

      // $("#about").offset({ top: 100 });

      e.preventDefault();
    });
  } else {
    $(".page-scroll").on("click", function (e) {
      var dest = $(this).attr("href");
      var elemenDest = $(dest);

      $("html, body").animate({
        scrollTop: elemenDest.offset().top - 125,
      });

      e.preventDefault();
    });
  }
}

var xx = window.matchMedia("(min-width: 1200px)");
scrollMe(xx); // Panggil fungsi listener pada saat dijalankan
xx.addListener(scrollMe); // Lampirkan fungsi listener pada perubahan status

// mode
$("#mode").on("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    $("#mode").addClass("bi-sun");
  } else {
    $("#mode").removeClass("bi-sun");
  }
});

// form contact
const scriptURL = "https://script.google.com/macros/s/AKfycbx6ZEif9rkQg8E44C2KhQb-z0hzxozUf1z_axgnGKCuaJ9NFKtWTIwv64Pv4eYn1m4Y7w/exec";
const form = document.forms["submit-to-google-sheet"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// var trigger = document.getElementsByClassName("trigger");
// var tooltip = new bootstrap.Tooltip(trigger, {
//   boundary: document.body,
// });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
