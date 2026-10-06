/* Portfolio interactions: nav, scroll reveal, active link, cursor, contact form */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  // Footer year
  $('#year').textContent = new Date().getFullYear();

  // Navbar background on scroll
  var nav = $('#nav');
  var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 20); };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  var burger = $('#burger'), menu = $('#menu');
  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  }
  burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Scroll reveal
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Active nav link
  var links = $$('.menu a');
  var sections = links.map(function (a) { return $(a.getAttribute('href')); });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  // Subtle custom cursor (mouse devices only, never blocks clicks)
  var cur = $('.cursor');
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (cur && fine && !reduce) {
    window.addEventListener('mousemove', function (e) {
      cur.classList.add('on');
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseover', function (e) {
      cur.classList.toggle('big', !!e.target.closest('a,button'));
    });
    document.addEventListener('mouseleave', function () { cur.classList.remove('on'); });
  }

  // Contact form (mailto). To use Formspree/EmailJS, see README.
  var form = $('#form'), note = $('#note');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    $$('input,textarea', form).forEach(function (f) {
      var bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle('invalid', bad);
      if (bad) ok = false;
    });
    if (!ok) { note.textContent = 'Please fill in all fields with valid details.'; return; }
    var d = new FormData(form);
    var body = d.get('message') + '\n\nFrom: ' + d.get('name') + ' (' + d.get('email') + ')';
    window.location.href = 'mailto:sanjanareddydc@gmail.com?subject=' +
      encodeURIComponent(d.get('subject')) + '&body=' + encodeURIComponent(body);
    note.textContent = 'Opening your email app...';
  });
})();
