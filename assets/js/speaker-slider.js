/*--------------- Speaker Slider ---------------*/

// Initialize Swiper for speaker slider
var swiper = new Swiper(".speaker-slider", {

  spaceBetween: 10, // Set space between slides
  loop: true, // Enable looping through slides

  // Autoplay settings
  autoplay: {
    delay: 5000, // Delay between slide transitions
    disableOnInteraction: false, // Continue autoplay on user interaction
  },

  // Define responsive breakpoints
  breakpoints: {
    450: { // For screens 450px and above
      slidesPerView: 1, // Show 1 slides per view
    },
    768: { // For screens 768px and above
      slidesPerView: 2, // Show 2 slides per view
    },
    991: { // For screens 980px and above
      slidesPerView: 4, // Show 4 slides per view
    },

  },

}); 
