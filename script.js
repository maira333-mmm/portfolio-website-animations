// Tab switching
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.getAttribute('data-tab');
  
      // Update active tab button
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
  
      // Update tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        if (content.getAttribute('data-tab') === tab) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
  
  // Show/Hide certificate image on click
  document.querySelectorAll('.certificate-name').forEach(item => {
    item.addEventListener('click', () => {
      const details = item.querySelector('.certificate-details');
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        // Hide others first
        document.querySelectorAll('.certificate-details').forEach(d => d.style.display = "none");
        details.style.display = "block";
      }
    });
  });
  