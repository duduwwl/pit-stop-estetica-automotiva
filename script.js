const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('is-open', !open);
  });
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
  }));
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const service = data.get('service');
    const message = data.get('message');
    const text = `Olá, Pit Stop! Meu nome é ${name}. Tenho interesse em: ${service}.${message ? `\n\nSobre o meu carro: ${message}` : ''}`;
    window.open(`https://wa.me/5535988313993?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });
}
