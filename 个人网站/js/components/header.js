/* ========================================
   Header — 导航栏交互逻辑
   - 滚动时添加背景
   - 移动端汉堡菜单切换
   - 当前页面高亮
   ======================================== */

import { $, $$, addClass, removeClass, toggleClass, setAttr, throttle } from '../utils/dom.js';

export default function initHeader() {
  const header = $('#header');
  const menuBtn = $('#menuBtn');
  const mobileMenu = $('#mobileMenu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
  let isMenuOpen = false;

  if (!header) return;

  /* ===== 滚动时添加半透明背景 + 阴影 ===== */
  function onScroll() {
    const scrolled = window.scrollY > 10;
    toggleClass(header, 'header--scrolled', scrolled);
  }

  window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });
  // 初始检查（页面可能在非顶部加载）
  onScroll();

  /* ===== 移动端菜单 ===== */
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

  menuBtn.addEventListener('click', () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // 点击菜单链接 → 关闭菜单
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Escape 关闭菜单
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
      menuBtn.focus();
    }
  });

  /* ===== 当前页面高亮（根据 URL 匹配） ===== */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = $$('nav a[data-page]', header);
  const mobileNavLinks = $$('.mobile-menu a[data-page]');

  [...navLinks, ...mobileNavLinks].forEach(link => {
    const page = link.getAttribute('data-page');
    if (page === currentPath) {
      addClass(link, 'active');
    }
  });
}
