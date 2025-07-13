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

    // Initialize dropdown functionality
    initializeDropdown();

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
