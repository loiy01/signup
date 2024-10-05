// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Fetch data from JSON server
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => {
        // Check if user exists and the password matches
        const user = users.find(user => user.email === email && user.password === password);
        
        if (user) {
          localStorage.setItem('userId', user.id);
          console.log(user.id);
          // Redirect to welcome page on successful login
          window.location.href = "home.html";
        } else {
          // Show alert if user not found or password incorrect
          alert('Invalid email or password. Please try again or create an account.');
        }
      })
      .catch(error => {
        console.error('Error fetching data from server:', error);
        alert('Error connecting to the server. Please try again later.');
      });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const person = document.getElementById('person');
    let positionX = 0; // X position for horizontal movement
    const speed = 2.5; // Adjust speed for desired animation speed
    const maxPositionX = window.innerWidth - person.offsetWidth; // Maximum horizontal distance
  
    function animatePerson() {
      positionX += speed; // Increment position by speed value
  
      // If the person reaches the right edge, reset position
      if (positionX > maxPositionX) {
        positionX = 0; // Reset to start again from left
      }
  
      person.style.transform = `translateX(${positionX}px)`; // Move person horizontally
      requestAnimationFrame(animatePerson); // Continue animating
    }
  
    animatePerson(); // Start the animation loop
  });
  
  