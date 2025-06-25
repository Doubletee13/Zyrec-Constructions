  
  const menuBtn = document.getElementById('hamburger-menu');
  const navLinks = document.querySelector('nav ul');

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click bubbling
    navLinks.classList.toggle('active');
  });

  // Close the menu when clicking anywhere else
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
  

  document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


