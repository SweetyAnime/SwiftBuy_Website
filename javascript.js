window.addEventListener("load", () => {
  setTimeout(() => {
    // Hide video
    const videoHero = document.querySelector(".video-hero");
    videoHero.style.display = "none";

    // Remove padding from main-content
    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
    mainContent.style.paddingTop = "100px"; // 🧠 This removes the gap

    // Show nav
    document.getElementById("overlay-nav").style.display = "flex";
  }, 5000);
});
