/* ========================================
   Main JS — 首页统一脚本（非模块版本）
   支持 file:// 直接打开
   ======================================== */

(function () {
  'use strict';

  /* ==========================================
     DOM Utilities
     ========================================== */

  const $ = (selector, parent) => (parent || document).querySelector(selector);
  const $$ = (selector, parent) => [...(parent || document).querySelectorAll(selector)];
  const addClass = (el, ...classes) => { if (el) el.classList.add(...classes); };
  const removeClass = (el, ...classes) => { if (el) el.classList.remove(...classes); };
  const toggleClass = (el, className, force) => { if (el) el.classList.toggle(className, force); };
  const setAttr = (el, attr, value) => { if (el) el.setAttribute(attr, value); };

  const throttle = (fn, delay) => {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= delay) { last = now; fn.apply(this, args); }
    };
  };

  /* ==========================================
     Header — 导航栏
     ========================================== */

  function initHeader() {
    const header = $('#header');
    const menuBtn = $('#menuBtn');
    const mobileMenu = $('#mobileMenu');
    if (!header) return;

    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    let isMenuOpen = false;

    function onScroll() {
      toggleClass(header, 'header--scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });
    onScroll();

    if (!menuBtn || !mobileMenu) return;

    function openMenu() {
      isMenuOpen = true;
      addClass(mobileMenu, 'mobile-menu--open');
      mobileMenu.removeAttribute('inert');
      setAttr(menuBtn, 'aria-expanded', 'true');
      setAttr(menuBtn, 'aria-label', '关闭菜单');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      isMenuOpen = false;
      removeClass(mobileMenu, 'mobile-menu--open');
      mobileMenu.setAttribute('inert', '');
      setAttr(menuBtn, 'aria-expanded', 'false');
      setAttr(menuBtn, 'aria-label', '打开菜单');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', function () {
      isMenuOpen ? closeMenu() : openMenu();
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
        menuBtn.focus();
      }
    });

    var currentPath = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = $$('nav a[data-page]', header);
    var mobileNavLinks = $$('.mobile-menu a[data-page]');

    [].concat(navLinks, mobileNavLinks).forEach(function (link) {
      if (link.getAttribute('data-page') === currentPath) {
        addClass(link, 'active');
      }
    });
  }

  /* ==========================================
     Scroll Reveal — 滚动入场动画
     ========================================== */

  function initScrollReveal() {
    var reveals = $$('.reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            addClass(entry.target, 'reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ==========================================
     Accordion — FAQ 折叠面板
     ========================================== */

  function initAccordion() {
    var container = $('.js-accordion-group');
    if (!container) return;

    var triggers = $$('.accordion__trigger', container);

    triggers.forEach(function (trigger) {
      var panel = document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel) return;

      trigger.addEventListener('click', function () {
        var isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // 手风琴模式：关闭其他面板（带动画）
        triggers.forEach(function (t) {
          var p = document.getElementById(t.getAttribute('aria-controls'));
          if (t !== trigger && t.getAttribute('aria-expanded') === 'true') {
            setAttr(t, 'aria-expanded', 'false');
            setAttr(p, 'aria-hidden', 'true');
            p.style.maxHeight = p.scrollHeight + 'px';
            requestAnimationFrame(function () {
              p.style.maxHeight = '0';
            });
          }
        });

        if (isExpanded) {
          setAttr(trigger, 'aria-expanded', 'false');
          setAttr(panel, 'aria-hidden', 'true');
          panel.style.maxHeight = '0';
        } else {
          setAttr(trigger, 'aria-expanded', 'true');
          setAttr(panel, 'aria-hidden', 'false');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });

      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  /* ==========================================
     Back to Top — 回到顶部
     ========================================== */

  function initBackToTop() {
    var btn = $('#backToTop');
    if (!btn) return;

    function onScroll() {
      if (window.scrollY > 500) {
        addClass(btn, 'back-to-top--visible');
      } else {
        removeClass(btn, 'back-to-top--visible');
      }
    }

    window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================
     Init — DOM Ready
     ========================================== */

  function init() {
    initHeader();
    initScrollReveal();
    initAccordion();
    initBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
