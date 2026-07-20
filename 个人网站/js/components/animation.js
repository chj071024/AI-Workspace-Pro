/* ========================================
   Animation — 滚动入场动画 (Scroll Reveal)
   基于 Intersection Observer，零依赖
   ======================================== */

import { $$, addClass } from '../utils/dom.js';

export default function initScrollReveal() {
  const reveals = $$('.reveal');

  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addClass(entry.target, 'reveal--visible');
          // 动画只触发一次
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,    // 元素 10% 进入视口时触发
      rootMargin: '0px 0px -40px 0px'  // 底部提前 40px 触发
    }
  );

  reveals.forEach((el) => observer.observe(el));
}
