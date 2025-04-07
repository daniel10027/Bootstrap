window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        sec.classList.add('reveal');
      }
    });
  });
  