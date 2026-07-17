// Universal Scroll Animation Observer
// Handles both scroll up and scroll down animations smoothly

export const initScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Trigger when 10% visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .stagger-children'
  );

  animatedElements.forEach((el) => observer.observe(el));

  return observer;
};

// Cleanup function
export const cleanupScrollAnimations = (observer) => {
  if (observer) {
    observer.disconnect();
  }
};
