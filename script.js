const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


document.addEventListener("DOMContentLoaded", function () {
  const btnTrigger = document.getElementById("btnOl");

  btnTrigger.addEventListener("click", function () {
    btnTrigger.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnTrigger = document.getElementById("btnOl");
  const overlayMenu = document.getElementById("overlayMenu");

  btnTrigger.addEventListener("click", function () {
    if (overlayMenu.style.pointerEvents === "auto") {
      fadeOut(overlayMenu, 0.1, function () {
      });
    } else {
      fadeIn(overlayMenu, 0.1);
    }
  });

  function fadeIn(element, step) {
    let opacity = 0;
    element.style.pointerEvents = "auto"; // マウスイベントを有効にする
    element.style.opacity = opacity;

    function fadeInStep() {
      opacity += step;
      if (opacity > 1) opacity = 1;
      element.style.opacity = opacity;

      if (opacity < 1) {
        requestAnimationFrame(fadeInStep);
      }
    }

    requestAnimationFrame(fadeInStep);
  }

  function fadeOut(element, step, callback) {
    let opacity = 1;

    function fadeOutStep() {
      opacity -= step;
      if (opacity < 0) {
        opacity = 0;
      }
      element.style.opacity = opacity;

      if (opacity > 0) {
        requestAnimationFrame(fadeOutStep);
      } else {
        element.style.pointerEvents = "none";
        if (callback) {
          callback();
        }
      }
    }

    requestAnimationFrame(fadeOutStep);
  }
});
