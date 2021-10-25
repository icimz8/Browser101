const vertical = document.querySelector(".vt");
const horizontal = document.querySelector(".hl");
const tag = document.getElementById("tag");
const target = document.querySelector(".target");

addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  console.log(targetRect)
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", event => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    tag.innerHTML = `${x}px ${y}px`
    tag.style.transform = `translate(${x +20}px, ${y+20}px)`;
  });

})