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


  
/*Themes*/
  document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("theme");
  
    // Change theme on selection
    themeSelector.addEventListener("change", (event) => {
      document.body.className = ""; // Reset current theme
      document.body.classList.add(event.target.value); // Apply selected theme
    });
  
    // Initialize with the first theme
    themeSelector.value = "theme1";
    document.body.classList.add("theme1");
  });


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
  