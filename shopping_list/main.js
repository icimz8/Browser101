'use strict';
const items = document.querySelector(".items")
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_btn");
const form = document.querySelector(".new_form");

function createItem() {
  event.preventDefault();
  const newText = input.value;
  const item = addList(newText);
  items.appendChild(item);
  item.scrollIntoView({
    block: 'center'
  });
  input.value = ''
  input.focus();
}

let id =0;
function addList(newText) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
     <div class="item"  data-id=${id}>
      <span class="item_name">${newText}</span>
      <button class="item_delete" >
        <i class="fas fa-trash" data-id=${id}></i>
      </button>
    </div> 
     <div class="item_divider"></div>`
  id++;
  console.log(id);
  return itemRow;
  
}

form.addEventListener('submit', (event) => {
  createItem();
})
items.addEventListener('click', event => {
  const id = event.target.dataset.id;
  if(id && event.target.tagName ==="I"){
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  };
});