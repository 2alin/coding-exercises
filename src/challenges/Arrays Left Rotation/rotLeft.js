function rotLeft(a, d) {
  const m = d % a.length;
  return [...a.slice(m), ...a.slice(0, m)];
}

export default rotLeft();
