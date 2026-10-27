// Navegação dos projetos por abas, setas, teclado e gesto de toque.
(function () {
  'use strict';
  var tabs = Array.from(document.querySelectorAll('.tab'));
  var panels = Array.from(document.querySelectorAll('.info'));
  var mocks = Array.from(document.querySelectorAll('.mock'));
  var stage = document.querySelector('.stage');
  var position = document.querySelector('.project-position');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var current = 0;

  function select(index, updateUrl) {
    current = (index + tabs.length) % tabs.length;
    tabs.forEach(function (tab, i) {
      tab.setAttribute('aria-selected', String(i === current));
      tab.tabIndex = i === current ? 0 : -1;
      panels[i].hidden = i !== current;
      panels[i].classList.toggle('is-active', i === current);
      mocks[i].classList.toggle('is-active', i === current);
    });
    var tab = tabs[current];
    stage.dataset.db = tab.dataset.db;
    document.querySelector('.url-sub').textContent = tab.dataset.sub;
    document.querySelector('.counter-now').textContent = current + 1;
    position.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(tabs.length).padStart(2, '0');
    if (tabs[0].parentElement.scrollWidth > tabs[0].parentElement.clientWidth) {
      tabs[0].parentElement.scrollTo({ left:tab.offsetLeft - tabs[0].offsetLeft - (tab.parentElement.clientWidth - tab.offsetWidth) / 2, behavior:reduced.matches ? 'auto' : 'smooth' });
    }
    if (updateUrl) {
      var url = new URL(window.location.href);
      url.searchParams.set('projeto', tab.dataset.sub);
      history.replaceState(null, '', url);
    }
  }
  function orientTabs() {
    document.querySelector('.tabs').setAttribute('aria-orientation', window.matchMedia('(max-width: 999px)').matches ? 'horizontal' : 'vertical');
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(i, true); });
    tab.addEventListener('keydown', function (event) {
      var next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = i + 1;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = i - 1;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      select(next, true);
      tabs[current].focus();
    });
  });
  document.querySelector('.project-prev').addEventListener('click', function () { select(current - 1, true); });
  document.querySelector('.project-next').addEventListener('click', function () { select(current + 1, true); });
  var touch = null;
  var viewport = document.querySelector('.win-view');
  viewport.addEventListener('touchstart', function (event) {
    touch = event.touches.length === 1 ? { x:event.touches[0].clientX, y:event.touches[0].clientY } : null;
  }, { passive:true });
  viewport.addEventListener('touchend', function (event) {
    if (!touch || !event.changedTouches.length) return;
    var dx = event.changedTouches[0].clientX - touch.x;
    var dy = event.changedTouches[0].clientY - touch.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) select(current + (dx < 0 ? 1 : -1), true);
    touch = null;
  }, { passive:true });
  viewport.addEventListener('touchcancel', function () { touch = null; }, { passive:true });
  mocks.forEach(function (mock) {
    mock.querySelectorAll('[data-s]').forEach(function (element, i) { element.style.setProperty('--d', i); });
  });
  var wanted = new URLSearchParams(window.location.search).get('projeto');
  var initial = tabs.findIndex(function (tab) { return tab.dataset.sub === wanted; });
  select(initial >= 0 ? initial : 0, false);
  if (initial >= 0 && !window.location.hash) document.getElementById('projetos').scrollIntoView({ behavior:'instant' });
  orientTabs();
  window.addEventListener('resize', orientTabs);
  document.getElementById('ano').textContent = new Date().getFullYear();
  // Ilustrações que se montam quando entram na tela (Sobre e DevDiary).
  document.querySelectorAll('.build, .diary-visual').forEach(function (element) {
    if (!('IntersectionObserver' in window) || reduced.matches) return;
    element.classList.add('is-pending');
    var observer = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      element.classList.remove('is-pending');
      observer.disconnect();
    }, { threshold:.4 });
    observer.observe(element);
  });
  // As teclas ao redor da foto caem com a rolagem, acelerando como em queda livre.
  var keys = document.querySelector('.portrait-keys');
  if (keys && !reduced.matches) {
    var ticking = false;
    var drop = function () {
      var y = Math.max(window.scrollY, 0);
      keys.style.setProperty('--fall', Math.min(y * y / 350, 1200).toFixed(1));
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(drop); }
    }, { passive:true });
    drop();
  }
})();
