/* ========================================
   Back to Top — 回到顶部按钮
   ======================================== */

import { $, addClass, removeClass, throttle } from '../utils/dom.js';

export default function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;

  function onScroll() {
    const shouldShow = window.scrollY > 500;
    if (shouldShow) {
      addClass(btn, 'back-to-top--visible');
    } else {
      removeClass(btn, 'back-to-top--visible');
    }
  }

  window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
