function updateClock() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const two = n => String(n).padStart(2, '0');
  document.getElementById('clock').textContent =
    `${two(h)}:${two(m)}:${two(s)} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();