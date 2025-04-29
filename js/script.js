document.addEventListener("DOMContentLoaded", function() {
  var heroSplide = new Splide(".hero-section .splide", {
    type: "fade",
    rewind: true,
    autoplay: false,
    interval: 5000,
    pauseOnHover: false,
    pagination: false,
    arrows: false
  });

  heroSplide.mount();

  const prevButton = document.querySelector(".nav__arrow--prev");
  const nextButton = document.querySelector(".nav__arrow--next");
  const dots = document.querySelectorAll(".dot");

  prevButton.addEventListener("click", () => {
    heroSplide.go("<");
  });

  nextButton.addEventListener("click", () => {
    heroSplide.go(">");
  });

  heroSplide.on("moved", function(newIndex) {
    dots.forEach((dot, index) => {
      if (index === newIndex) {
        dot.classList.add("dot--active");
      } else {
        dot.classList.remove("dot--active");
      }
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      heroSplide.go(index);
    });
  });


});


const copyLogos = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copyLogos);


var insideHubSplide = new Splide(".insight-hub.splide", {
  type: "loop",
  rewind: true,
  autoplay: false,
  interval: 5000,
  pauseOnHover: false,
  pagination: false,
  arrows: false,
  gap: "0rem",
  padding:"14.5rem",
  breakpoints: {
    768: {
      perPage: 1,
      gap: "0.5rem",
    },
    1024: {
      perPage: 2,
      gap: "0.75rem",
    },
  },
});

insideHubSplide.mount();

const insightPrevButton = document.querySelector(".nav__arrow--prev.insight-hub-nav-btn");
const insightNextButton = document.querySelector(".nav__arrow--next.insight-hub-nav-btn");

const insightDots = document.querySelectorAll(".insight-hub-nav-btn .dot");
console.log(insightDots);
console.log(insightPrevButton);
console.log(insightNextButton);

if (insightPrevButton && insightNextButton) {
  insightPrevButton.addEventListener("click", () => {
    insideHubSplide.go("<");
  });

  insightNextButton.addEventListener("click", () => {
    insideHubSplide.go(">");
  });
}

insideHubSplide.on("moved", function(newIndex) {
  insightDots.forEach((insdot, index) => {
    if (index === newIndex) {
      insdot.classList.add("dot--active");
    } else {
      insdot.classList.remove("dot--active");
    }
  });
});

insightDots.forEach((insdot, index) => {
  insdot.addEventListener("click", () => {
    insideHubSplide.go(index);
  });
});