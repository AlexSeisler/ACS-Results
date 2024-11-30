// JavaScript to trigger the modal on page load
window.onload = function () {
    var myModal = new bootstrap.Modal(document.getElementById('introModal'));
    myModal.show();
  };
  
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
  