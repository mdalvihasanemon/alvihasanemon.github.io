const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.textContent = open ? '✕' : '☰'; menu.setAttribute('aria-expanded', String(open)); });
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.textContent = '☰'; menu.setAttribute('aria-expanded','false'); }));
document.querySelector('.theme')?.addEventListener('click', () => document.body.classList.toggle('light'));
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)} }), {threshold:.12}); document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); } else { document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')); }
const form = document.querySelector('#contactForm');
form?.addEventListener('submit', e => { e.preventDefault(); const d = new FormData(form); const subject = encodeURIComponent(`Portfolio enquiry from ${d.get('name')}`); const body = encodeURIComponent(`${d.get('message')}\n\nFrom: ${d.get('name')}\nEmail: ${d.get('email')}`); location.href = `mailto:alviemon@gmail.com?subject=${subject}&body=${body}`; });
