// Optional: Add scroll-triggered animations
document.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.animationPlayState = "running";
    }
  });
});
