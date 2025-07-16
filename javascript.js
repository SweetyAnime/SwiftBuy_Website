window.addEventListener("load", () => {
  setTimeout(() => {
    // Hide video
    const videoHero = document.querySelector(".video-hero");
    videoHero.style.display = "none";

    // Show main content
    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";

    // Show fixed header container
    const headerFixed = document.querySelector(".header-fixed");
    headerFixed.style.display = "block";

    // Show top navigation bar
    const topNav = document.querySelector(".top-nav");
    topNav.style.display = "block";

    // Initialize dropdown functionality
    initializeDropdown();
    
    // Initialize banner carousel
    initializeBannerCarousel();

  }, 5000);
});

function initializeDropdown() {
  const categoryDropdown = document.querySelector(".category-dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const categoryText = document.querySelector(".category-text");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const dropdownArrow = document.querySelector(".dropdown-arrow");

  // Toggle dropdown on click
  categoryDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.classList.contains("show");
    
    if (isOpen) {
      dropdownMenu.classList.remove("show");
      dropdownArrow.style.transform = "rotate(0deg)";
    } else {
      dropdownMenu.classList.add("show");
      dropdownArrow.style.transform = "rotate(180deg)";
    }
  });

  // Handle dropdown item selection
  dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      categoryText.textContent = e.target.textContent;
      dropdownMenu.classList.remove("show");
      dropdownArrow.style.transform = "rotate(0deg)";
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!categoryDropdown.contains(e.target)) {
      dropdownMenu.classList.remove("show");
      dropdownArrow.style.transform = "rotate(0deg)";
    }
  });

  // Add search functionality
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector(".search-input");

  searchIcon.addEventListener("click", () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      console.log("Searching for:", searchTerm);
      // Add your search logic here
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log("Searching for:", searchTerm);
        // Add your search logic here
      }
    }
  });
}

// Banner Carousel Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Add active class to current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  
  currentSlideIndex = index;
}

function nextSlide() {
  const nextIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function previousSlide() {
  const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

function currentSlide(index) {
  showSlide(index - 1);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Initialize carousel when main content is shown
function initializeBannerCarousel() {
  if (slides.length > 0) {
    showSlide(0);
    startAutoSlide();
    
    // Pause auto-slide on hover
    const carousel = document.querySelector('.banner-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', stopAutoSlide);
      carousel.addEventListener('mouseleave', startAutoSlide);
    }
  }
}

// Update the main content show function
function showMainContent() {
  const mainContent = document.getElementById('main-content');
  const headerFixed = document.querySelector('.header-fixed');
  
  if (mainContent) {
    mainContent.style.display = 'block';
  }
  
  if (headerFixed) {
    headerFixed.style.display = 'block';
  }
  
  // Initialize banner carousel after content is shown
  setTimeout(initializeBannerCarousel, 100);
}
