export const setupScrollAnimation = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const checkVisibility = () => {
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', checkVisibility);
  
  // Check on initial load
  checkVisibility();
  
  return () => {
    window.removeEventListener('scroll', checkVisibility);
  };
};