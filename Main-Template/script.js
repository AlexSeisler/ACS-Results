// JavaScript to trigger and close the custom popup

// Show the popup after the page loads
window.onload = function () {
  setTimeout(function () {
      document.getElementById("introPopup").classList.add("show");
  }, 100); // Delay to give the page time to load
};

// Function to close the popup
function closePopup() {
  document.getElementById("introPopup").classList.remove("show");
}



/*Timeline interactivity*/
  document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    };
  
    const handleScroll = () => {
      timelineItems.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });
  