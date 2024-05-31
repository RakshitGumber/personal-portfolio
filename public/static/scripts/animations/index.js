export function rippleEffect(e) {
  let ripple = document.createElement("span");
  ripple.classList.add("ripple");
  this.appendChild(ripple);

  let x = e.clientX - e.currentTarget.offsetLeft;
  let y = e.clientY - e.currentTarget.offsetTop;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  setTimeout(() => {
    ripple.remove();
  }, 300);
}
