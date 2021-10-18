const result = document.getElementById("result");
const cursor = document.getElementById("cursor");
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

document.addEventListener("mousemove", crossLine);
document.addEventListener("mousemove", resultTwo);