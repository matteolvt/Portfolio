document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 100; // Ajuste cette valeur selon la hauteur de ton menu
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const offsetPosition = targetRect - bodyRect - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
  