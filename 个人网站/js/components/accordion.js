/* ========================================
   Accordion — FAQ 折叠面板
   支持键盘操作、ARIA、动画
   ======================================== */

import { $, $$, setAttr } from '../utils/dom.js';

export default function initAccordion(containerSelector = '.js-accordion-group') {
  const container = $(containerSelector);
  if (!container) return;

  const triggers = $$('.accordion__trigger', container);

  triggers.forEach((trigger) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // 手风琴模式：关闭其他已展开的面板（带动画）
      triggers.forEach((t) => {
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (t !== trigger && t.getAttribute('aria-expanded') === 'true') {
          setAttr(t, 'aria-expanded', 'false');
          setAttr(p, 'aria-hidden', 'true');
          // 先设当前高度再归零，保证 CSS transition 生效
          p.style.maxHeight = p.scrollHeight + 'px';
          requestAnimationFrame(() => {
            p.style.maxHeight = '0';
          });
        }
      });

      if (isExpanded) {
        // 关闭
        setAttr(trigger, 'aria-expanded', 'false');
        setAttr(panel, 'aria-hidden', 'true');
        panel.style.maxHeight = '0';
      } else {
        // 打开
        setAttr(trigger, 'aria-expanded', 'true');
        setAttr(panel, 'aria-hidden', 'false');
        // 动态设置 max-height 为实际内容高度
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });

    // 键盘操作
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}
