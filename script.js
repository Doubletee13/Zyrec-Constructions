document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu logic
  const menuBtn = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent click bubbling
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });

    // Close the menu when clicking anywhere else
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target)) {
        menuBtn.classList.remove('active');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll('li a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
      });
    });
  }

  // Scroll to top button logic
  const upIcon = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', function () {
    if (upIcon) {
      if (window.scrollY > 300) {
        upIcon.style.display = 'block';
      } else {
        upIcon.style.display = 'none';
      }
    }
  });

  // Sticky Nav and Header hide on scroll logic
  const headerInfo = document.getElementById('header-info');
  const nav = document.getElementById('main-nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (headerInfo && nav) {
      if (currentScrollY > lastScrollY && currentScrollY > headerInfo.offsetHeight) {
        // Scrolling down past header-info
        headerInfo.classList.add('hidden');
        nav.classList.add('fixed');
      } else if (currentScrollY < lastScrollY && currentScrollY <= headerInfo.offsetHeight) {
        // Scrolling up to top
        headerInfo.classList.remove('hidden');
        nav.classList.remove('fixed');
      }
    }

    lastScrollY = currentScrollY;
  });

  // Track Record Counters Animation using IntersectionObserver
  const counters = document.querySelectorAll('.counter');
  const speed = 150; // The lower the slower

  const startCounting = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the section is visible
  };

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCounting(counter);
        observer.unobserve(counter); // Only run once
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    countObserver.observe(counter);
  });

  // Hero Slider Logic
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0) {
    const showSlide = (index) => {
      // Manage edge cases
      if (index >= slides.length) currentSlide = 0;
      else if (index < 0) currentSlide = slides.length - 1;
      else currentSlide = index;

      slides.forEach((slide, i) => {
        if (i === currentSlide) {
          slide.classList.remove('opacity-0', 'z-0');
          slide.classList.add('opacity-100', 'z-10');
        } else {
          slide.classList.remove('opacity-100', 'z-10');
          slide.classList.add('opacity-0', 'z-0');
        }
      });
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const prevSlide = () => {
      showSlide(currentSlide - 1);
    };

    const startSlider = () => {
      slideInterval = setInterval(nextSlide, 5000); // 5 seconds
    };

    const resetSlider = () => {
      clearInterval(slideInterval);
      startSlider();
    };

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlider();
      });

      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlider();
      });
    }

    // Initialize
    showSlide(currentSlide);
    startSlider();
  }
});
