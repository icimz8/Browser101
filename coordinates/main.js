const vertical = document.querySelector(".vt");
const horizontal = document.querySelector(".hl");
const cursor = document.getElementById("tag");
const target = document.querySelector(".target");

function crossLine(e) {
  result.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
  target.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
};

function resultTwo(e) {
  cursor.style.left = e.clientX + 20 + "px";
  cursor.style.top = e.clientY + 20 + "px";
  cursor.innerText = `${e.clientX} ${e.clientY}`
}

document.addEventListener("mousemove", event => {
  const x = event.clientX;
  const y = event.clientY;
  
  vertical.style.left =`${x}px`;
  horizontal.style.top =`${y}px`;
  target.style.left = `${x}px`;
  target.style.top =`${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top =`${y}px`;
  tag.innerHTML = `${x}px ${y}px`
});
 