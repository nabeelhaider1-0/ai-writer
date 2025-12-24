const lenis = new Lenis();
// Function to scroll to specific element
// Smooth scroll to target section using Lenis
function smoothScrollToSection(selector) {
  const targetSection = document.querySelector(selector);
  if (targetSection) {
    lenis.scrollTo(targetSection);
  }
}

// Event listeners for Overview and Q&A
document
  .querySelector('a[href="#Overview"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#Overview");
  });

document
  .querySelector('a[href="#Templates"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollToSection("#Templates");
  });
document.querySelector('a[href="#QA"]').addEventListener("click", function (e) {
  e.preventDefault();
  smoothScrollToSection("#QA");
});
// Update the event listener for "Get the App" button
// document
//   .querySelector('a[href="#DownloadApp"]')
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     smoothScrollToSection("#DownloadApp");
//   });

document.querySelector(".get-app-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default behavior
  smoothScrollToSection("#DownloadApp");
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Get the elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navbarContainer = document.getElementById("navbar-container");
let isOpen = false;

// Add event listener for the toggle button
menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  console.log("Menu Toggle Clicked. isOpen:", isOpen); // Debugging

  if (isOpen) {
    navbarContainer.classList.add("nav-open");
    menuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Cross icon
  } else {
    navbarContainer.classList.remove("nav-open");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
  }
});
// Add dropdown functionality
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown.querySelector("a");

dropdownLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  dropdown.classList.toggle("open"); // Toggle the open class
});
// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  // Check if the clicked target is outside the dropdown
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});
// Close nav when clicking a nav link
const navLinksA = document.querySelectorAll(".nav-links li a"); // Select all nav links

navLinksA.forEach((link) => {
  link.addEventListener("click", () => {
    if (isOpen) {
      navbarContainer.classList.remove("nav-open");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Reset to hamburger icon
      isOpen = false; // Reset the toggle state
    }
  });
});

function activateTab(tab) {
  // Remove active class from all tabs
  document
    .querySelectorAll(".essayTab")
    .forEach((t) => t.classList.remove("active"));

  // Add active class to the clicked tab
  tab.classList.add("active");

  // Hide all tab contents with fade-out
  document.querySelectorAll(".essayContent").forEach((content) => {
    content.style.display = "none";
    content.classList.remove("active");
  });

  // Show the corresponding content with a smooth transition
  const tabContentId = tab.getAttribute("data-tab");
  const contentToShow = document.getElementById(`tab-${tabContentId}`);
  contentToShow.style.display = "block";
  setTimeout(() => {
    contentToShow.classList.add("active");
  }, 0); // Apply the active class instantly
}

// Activate the default tab content on page load
window.onload = function () {
  const defaultTab = document.querySelector(".essayTab.active");
  activateTab(defaultTab);
};

// Add event listeners for all tabs
document.querySelectorAll(".essayTab").forEach((tab) => {
  tab.addEventListener("click", function () {
    activateTab(this);
  });
});

//  Accordian Header
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const accordionItem = this.parentElement;

    // Toggle the active class
    accordionItem.classList.toggle("active");

    // Close other accordions when one is opened
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem && item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  });
});

// Swiper Cards Clients

var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.78,
  loop: true,
  initialSlide: 1,
  spaceBetween: 35,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
