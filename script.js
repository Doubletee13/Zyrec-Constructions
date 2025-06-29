  
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

window.addEventListener('scroll', function () {
    const upIcon = document.querySelector('.upward-icon');
    if (window.scrollY > 100) {
      upIcon.style.display = 'block';
    } else {
      upIcon.style.display = 'none';
    }
  });

    const headerInfo = document.querySelector('.header-info');
  const nav = document.querySelector('nav');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > headerInfo.offsetHeight) {
      // Scrolling down past header-info
      headerInfo.classList.add('hide');
      nav.classList.add('fixed');
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      headerInfo.classList.remove('hide');
      nav.classList.remove('fixed');
    }

    lastScrollY = currentScrollY;
  });


