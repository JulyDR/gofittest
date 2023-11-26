// Mobile Menu
$( document ).ready(function() {
    $(".burger-button").click(function(){
      $(".burger-button").toggleClass("active");
      $(".burger-menu").toggleClass("active");
    });
  });

  
// Animaite on Scroll
AOS.init ({ 
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) so that even though we arrive at the original location the element is not scrolling in straight away
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });

// Modal Test
 // Same as before, I've added the code that handles the vertical scroll 
 const modalContent = document.querySelector('.modal-content');

 function showModal() {
   modalContent.classList.add('show');
   document.body.classList.add('modal-open');
 }

 function hideModal() {
   modalContent.classList.remove('show');
   document.body.classList.remove('modal-open');
 }
 
// Get all the trigger buttons on the page
 const triggers = document.querySelectorAll('.modal-trigger');

// Loop through each trigger button using the forEach method
 triggers.forEach(function(trigger) {
     // Get the ID of the corresponding modal
     const modalID = trigger.dataset.modalId;

     // Find the corresponding modal and the close button
     const modal = document.getElementById(modalID);
     const closeButton = modal.querySelector('.close');

     // Add a click event listener to the trigger button to open the modal
     trigger.addEventListener('click', function() {
       modal.style.display = 'block';
       showModal();
     });

     // Add a click event listener to the close button to close the modal
     closeButton.addEventListener('click', function() {
       modal.style.display = 'none';
       hideModal();
     });

     // Add a click event listener to the window to close the modal when clicking outside the modal
     window.addEventListener('click', function(event) {
     if (event.target === modal) {
         modal.style.display = 'none';
         hideModal();
     }
   });
});