// Portfólio: seletor de projetos, rolagem do palco, revelações e tema.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var stageMode = window.matchMedia('(min-width: 1000px) and (min-height: 640px)');

  /* ---------------- Seletor de projetos ---------------- */
  var stage = document.querySelector('.stage');
  var track = document.querySelector('.proj-track');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var mocks = Array.prototype.slice.call(document.querySelectorAll('.mock'));
  var infos = Array.prototype.slice.call(document.querySelectorAll('.info'));
  var indicator = document.querySelector('.tab-indicator');
  var railFill = document.querySelector('.rail-fill');
  var win = document.querySelector('.win');
  var urlSub = document.querySelector('.url-sub');
  var counterNow = document.querySelector('.counter-now');
  var current = 0;
  var typingTimer = null;
  var pending = null; // projeto escolhido por clique enquanto a rolagem suave anda

  // Medidas de layout lidas uma vez e atualizadas só quando o tamanho muda,
  // para o handler de rolagem não forçar layout a cada frame.
  var layout = { stickyTop: 0, range: 1, trackTop: 0, tabs: [] };

  function measure() {
    layout.stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
    layout.range = Math.max(track.offsetHeight - stage.offsetHeight, 1);
    layout.trackTop = track.getBoundingClientRect().top + window.scrollY;
    layout.tabs = tabs.map(function (t) { return { y: t.offsetTop, h: t.offsetHeight }; });
  }

  // Índice de cada elemento que entra em sequência dentro das telas
  mocks.forEach(function (mock) {
    mock.querySelectorAll('[data-s]').forEach(function (el, k) { el.style.setProperty('--d', k); });
  });

  function moveIndicator() {
    var m = layout.tabs[current];
    if (!m) return;
    indicator.style.setProperty('--ind-y', m.y + 'px');
    indicator.style.setProperty('--ind-h', m.h);
  }

  function typeUrl(sub) {
    clearInterval(typingTimer);
    if (reduceMotion.matches) { urlSub.textContent = sub; return; }
    var i = 0;
    urlSub.textContent = '';
    win.classList.add('is-typing');
    typingTimer = setInterval(function () {
      i += 1;
      urlSub.textContent = sub.slice(0, i);
      if (i >= sub.length) {
        clearInterval(typingTimer);
        setTimeout(function () { win.classList.remove('is-typing'); }, 400);
      }
    }, 38);
  }

  // O projeto escolhido fica na URL (?projeto=chat) para poder ser compartilhado.
  // Fora da seção de projetos o parâmetro sai, para não atrapalhar outros links.
  function syncUrl(sub) {
    var url = new URL(window.location.href);
    if (url.searchParams.get('projeto') === sub) return;
    if (sub) url.searchParams.set('projeto', sub);
    else url.searchParams.delete('projeto');
    history.replaceState(null, '', url);
  }

  function select(i) {
    if (i === current) return;
    current = i;
    var tab = tabs[i];

    tabs.forEach(function (t, k) {
      var on = k === i;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    infos.forEach(function (p, k) {
      p.hidden = k !== i;
      p.classList.toggle('is-active', k === i);
    });
    mocks.forEach(function (m, k) { m.classList.toggle('is-active', k === i); });

    stage.setAttribute('data-db', tab.dataset.db);
    counterNow.textContent = i + 1;
    typeUrl(tab.dataset.sub);
    moveIndicator();

    // No mobile, mantém a aba escolhida visível na faixa horizontal
    if (!stageMode.matches) {
      // Centraliza a aba na faixa sem mexer na rolagem vertical da página
      var strip = tab.parentElement;
      strip.scrollTo({
        left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2,
        behavior: reduceMotion.matches ? 'auto' : 'smooth'
      });
    }
  }

  // Posição de rolagem que corresponde ao projeto i (modo palco).
  // O palco gruda abaixo do header: a faixa útil de rolagem é trilha menos palco.
  function scrollTargetFor(i) {
    return layout.trackTop - layout.stickyTop + layout.range * ((i + 0.5) / tabs.length);
  }

  function activate(i, instant) {
    if (stageMode.matches) {
      pending = i;
      window.scrollTo({ top: scrollTargetFor(i), behavior: instant || reduceMotion.matches ? 'auto' : 'smooth' });
    }
    select(i);
    syncUrl(tabs[i].dataset.sub);
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { activate(i); });
    tab.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % tabs.length;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') next = 0;
      if (e.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      e.preventDefault();
      tabs[next].focus();
      activate(next);
    });
  });

  // Rolagem: no modo palco, o progresso dentro da trilha escolhe o projeto
  var header = document.querySelector('.site-header');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 8);
      if (!stageMode.matches) return;
      var raw = (y + layout.stickyTop - layout.trackTop) / layout.range;
      var p = Math.min(Math.max(raw, 0), 1);
      var inView = raw >= 0 && raw <= 1;
      railFill.style.setProperty('--p', p);
      var idx = Math.min(Math.floor(p * tabs.length), tabs.length - 1);
      if (pending !== null) {
        if (idx !== pending) return; // não passa pelos projetos do meio
        pending = null;
      }
      select(idx);
      syncUrl(inView ? tabs[idx].dataset.sub : null);
    });
  }

  function relayout() { measure(); moveIndicator(); onScroll(); }

  window.addEventListener('scroll', onScroll, { passive: true });
  ['wheel', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, function () { pending = null; }, { passive: true });
  });
  window.addEventListener('scrollend', function () { pending = null; onScroll(); });
  window.addEventListener('resize', relayout);
  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(relayout);
    ro.observe(track);
    ro.observe(stage);
  }
  window.addEventListener('load', relayout); // fonte e imagens podem mudar as medidas

  measure();
  moveIndicator();

  // Link direto: ?projeto=chat abre já nesse projeto
  var wanted = new URLSearchParams(window.location.search).get('projeto');
  var wantedIdx = tabs.findIndex(function (t) { return t.dataset.sub === wanted; });
  if (wantedIdx > 0) {
    if (window.location.hash) {
      select(wantedIdx); // link com âncora (#contato): respeita a âncora
    } else {
      activate(wantedIdx, true);
      if (!stageMode.matches) document.getElementById('projetos').scrollIntoView();
    }
  }
  onScroll();

  /* ---------------- Revelação ao rolar ----------------
     A classe "io" só entra aqui: se este arquivo não carregar, nada fica escondido. */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('io');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Tema e rodapé ---------------- */
  var themeBtn = document.getElementById('theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    var html = document.documentElement;
    html.setAttribute('data-theme', theme);
    themeBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    themeMeta.setAttribute('content', getComputedStyle(document.body).backgroundColor);
  }

  themeBtn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  applyTheme(document.documentElement.getAttribute('data-theme'));

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
