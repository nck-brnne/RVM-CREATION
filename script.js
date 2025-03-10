
function reloadPage() {
    location.reload();
    window.location.href = "";
  }
  
  function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
  }


  const toggleBtn = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')
  var navUL = document.querySelector('nav ul');
  
  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
  }
  
  function closeDropDownMenu() {
      dropDownMenu.classList.remove('open');
    }
  
    document.addEventListener('click', function (event) {
      const targetElement = event.target;
      if (!targetElement.closest('.dropdown_menu') && !targetElement.closest('.toggle_btn')) {
        closeDropDownMenu();
      }
    });
    
  
  window.addEventListener('scroll', function () {
      closeDropDownMenu();
  });
  




const REVSC = document.querySelectorAll('.REV');

function checkCardVisibility() {
  const threshold = 0.7; // Adjust this value as needed

  REVSC.forEach(REV => {
    const rect = REV.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate the threshold offset based on the card's height
    const thresholdOffset = rect.height * (1 - threshold);

    if (rect.top < windowHeight - thresholdOffset && rect.bottom >= 0) {
      REV.classList.add('animate-reveal');
    } else {
      REV.classList.remove('animate-reveal');
    }
  });
}

// Initial check
checkCardVisibility();

// Listen for scroll events
window.addEventListener('scroll', checkCardVisibility);



const homet = document.querySelectorAll('.homie');

function checkhomeVisibility() {
  const threshold = 1; // Adjust this value as needed

  homet.forEach(HOM => {
    const hoe = HOM.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate the threshold offset based on the card's height
    const thresholdOffset = hoe.height * (1 - threshold);

    if (hoe.top < windowHeight - thresholdOffset && hoe.bottom >= 0) {
        HOM.classList.add('animate-reveal');
    }
  });
}

// Initial check
checkhomeVisibility();

// Listen for scroll events
window.addEventListener('scroll', checkhomeVisibility);




const ServiceSection = document.querySelector('.SERVICES');
const cards = ServiceSection.querySelectorAll('.card1, .card2, .card3');


const optionsService = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4 // Adjust this value to control when the reveal effect is triggered
  };
  
  const revealCallbackService = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach(card => {
          card.classList.add('animate-reveal');
        });
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observerService = new IntersectionObserver(revealCallbackService, optionsService);
  observerService.observe(ServiceSection);
  

////////////**********STICKY NAV************///////////////

$(document).ready(function(){
    $(window).on('scroll', function(){
      if ($(window).scrollTop()) {
            $("header").addClass('bgc');
      }else{
            $("header").removeClass('bgc');
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".RvM-profile img");

    function revealImages() {
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                img.classList.add("animate-reveal");
            }
        });
    }

    window.addEventListener("scroll", revealImages);
    revealImages(); // Run once on page load
});


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".REV");

  function lazyLoadImages() {
      elements.forEach((el) => {
          if (el.dataset.bg) {
              el.style.backgroundImage = `url(${el.dataset.bg})`;
              el.removeAttribute("data-bg");
          }
      });
  }

  function revealOnScroll() {
      elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
              el.classList.add("animate-reveal");
              lazyLoadImages(); // Load images when visible
          }
      });
  }

  function handleNavigation() {
      const target = document.querySelector("#sample-works");
      if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          lazyLoadImages(); // Ensure images load immediately
          setTimeout(() => {
              elements.forEach((el) => el.classList.add("animate-reveal"));
          }, 300); // Small delay to ensure images are set
      }
  }

  // Apply smooth scrolling when clicking navigation links
  document.querySelectorAll("a[href='#sample-works']").forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent instant jump
          handleNavigation();
      });
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".REV");

  function revealOnScroll() {
      elements.forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
              el.classList.add("animate-reveal");
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});

document.addEventListener("DOMContentLoaded", function () {
  const servicesSection = document.getElementById("SERVICES");
  const cardGrid = document.querySelector(".card-grid");
  const cards = document.querySelectorAll(".card1, .card2, .card3");

  function revealServices() {
      cardGrid.classList.add("reveal");
      cards.forEach(card => {
          card.classList.add("reveal");
      });
  }

  // Listen for click on Services menu
  document.querySelector("a[href='#SERVICES']").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default scrolling
      servicesSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(revealServices, 500); // Delay to sync with scroll
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let videos = document.querySelectorAll(".video-works video");

  let observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.play();
              } else {
                  entry.target.pause();
              }
          });
      },
      { threshold: 0.5 } // Play when 50% of video is visible
  );

  videos.forEach((video) => observer.observe(video));
});

document.addEventListener("DOMContentLoaded", function () {
  let videos = document.querySelectorAll(".video-works video");

  videos.forEach((video) => {
      video.load(); // Ensures video is loaded
      video.play().catch(() => console.log("Autoplay prevented by browser"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".back-video");
  video.play().catch(() => console.log("Autoplay prevented by browser"));
});