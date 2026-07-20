/* ========================================
   DOM Utilities — 轻量 DOM 操作封装
   避免引入 jQuery，提供常用操作
   ======================================== */

/**
 * querySelector 简写
 */
export const $ = (selector, parent = document) => parent.querySelector(selector);

/**
 * querySelectorAll 简写
 */
export const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/**
 * 添加 class
 */
export const addClass = (el, ...classes) => {
  if (!el) return;
  el.classList.add(...classes);
};

/**
 * 移除 class
 */
export const removeClass = (el, ...classes) => {
  if (!el) return;
  el.classList.remove(...classes);
};

/**
 * 切换 class
 */
export const toggleClass = (el, className, force) => {
  if (!el) return;
  el.classList.toggle(className, force);
};

/**
 * 设置 attribute
 */
export const setAttr = (el, attr, value) => {
  if (!el) return;
  el.setAttribute(attr, value);
};

/**
 * 获取 attribute
 */
export const getAttr = (el, attr) => {
  if (!el) return null;
  return el.getAttribute(attr);
};

/**
 * 防抖 (debounce)
 */
export const debounce = (fn, delay = 100) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * 节流 (throttle)
 */
export const throttle = (fn, delay = 100) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn(...args);
    }
  };
};

/**
 * 检查元素是否在视口内
 */
export const isInViewport = (el, offset = 0) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - offset && rect.bottom >= offset;
};
