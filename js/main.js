$(document).ready(function() {
    // Array of roles
    var roles = ["Designer", "Developer", "Freelancer", "Digital Ads","Web Apps","Websites", "QR-Menus" , "Digital Menus"];
    var currentRoleIndex = 0;
  
    // Function to simulate typing effect
    function typeText(index, text, callback) {
        if (index < text.length) {
            $("#changingText").text(text.substring(0, index + 1));
            setTimeout(function() {
                typeText(index + 1, text, callback);
            }, 100); // Adjust the typing speed (milliseconds)
        } else {
            setTimeout(callback, 1000); // Wait for 1 second after typing
        }
    }
  
    // Function to change the text
    function changeText() {
        var currentRole = roles[currentRoleIndex];
        typeText(0, currentRole, function() {
            // Move to the next role in the array
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            // Trigger the next role after a delay (e.g., 1 second)
            setTimeout(changeText, 1000);
        });
    }
  
    // Start the typing animation
    changeText();
  
    // About us more text
    $("#readMoreLink").click(function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
  
        // Toggle between showing and hiding the full text
        $("#fullText").toggle();
        $("#introText").toggle();
  
        // Change the text of the "Read More" link based on its current state
        var linkText = ($("#fullText").is(":visible")) ? "Read Less" : "Read More";
        $("#readMoreLink").text(linkText);
    });
  
    // Intersection observer for scrolling animations
    const elements = document.querySelectorAll(".scrolling-text, .scrolling-text2");
  
    const callbackFunction = function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0%) translateY(0%)";
            }
        });
    };
  
    const observerOptions = {
        threshold: 0.3
    };
  
    const observer = new IntersectionObserver(callbackFunction, observerOptions);
  
    elements.forEach(element => {
        observer.observe(element);
    });
  
  
    // About us more text
    $("#readMoreLink").click(function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
  
        // Toggle the visibility of the #fullText with a smooth CSS animation
        $("#fullText").toggleClass("show-text");
  
        // Toggle the text of the "Read More" link based on its current state
        var linkText = ($("#fullText").hasClass("show-text")) ? "Read Less" : "Read More";
        $("#readMoreLink").text(linkText);
    });
  
    // ... (rest of your code)
  });

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true, // Enable autoplay
    autoplayTimeout: 5000, // Set autoplay timeout in milliseconds (adjust as needed)
    responsive: {
      1000: {
        items: 1, // Show 1 item on screens wider than 1000px
      }
    }
  });
  
  