document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.faq-question');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq-question__btn');
      const content = self.querySelector('.faq-question__descr');

      self.classList.toggle('faq-question__descr--open');
    
      if (self.classList.contains('faq-question__descr--open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});