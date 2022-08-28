export function debounce(func, ms, timer) {
  if (timer.timerId) clearTimeout(timer.timerId);

  timer.timerId = setTimeout(() => {
    func();
    timer.timerId = null;
  }, ms);
}
