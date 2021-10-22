const list = document.querySelector(".items")
const input = document.querySelector(".footer_input");
const form = document.querySelector(".footer form");
const btn = form.querySelector(".item_delete");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputTodo = input.value;
  const li = document.createElement('li');
  // console.log(inputTodo);
  li.innerText = inputTodo;
  list.appendChild(li);
  input.value='';
}) 
