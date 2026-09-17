/* Stewy’s Cards site behavior */

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const mobileLinks = document.querySelector('.mobile-links');
  if (!menu || !mobileLinks) return;

  menu.addEventListener('click', function () {
    const open = mobileLinks.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  mobileLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileLinks.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open menu');
    });
  });
});
