const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const image = document.getElementById('profileImage');
const placeholder = document.getElementById('photoPlaceholder');
if (image && placeholder) {
  const update = () => {
    const empty = !image.getAttribute('src') || image.getAttribute('src') === 'PASTE-YOUR-IMAGE-URL-HERE';
    placeholder.style.display = empty ? 'flex' : 'none';
    image.style.display = empty ? 'none' : 'block';
  };
  image.addEventListener('load', () => { placeholder.style.display = 'none'; image.style.display = 'block'; });
  image.addEventListener('error', update);
  update();
}
const revealItems = document.querySelectorAll('.section-heading,.project,.skill-row,.timeline>div,.section-content');
if ('IntersectionObserver' in window) {
  revealItems.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: 0.12});
  revealItems.forEach(el => observer.observe(el));
}
