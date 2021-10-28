'use strict';
const items = document.querySelector(".items")
const input = document.querySelector(".footer_input");
const addBtn= document.querySelector(".footer_btn");  

function createItem() {
  event.preventDefault();
  const newText = input.value;
  const item = addList(newText);
  items.appendChild(item);
  item.scrollIntoView({block: 'center'});
  input.value =''
  input.focus();
}

function addList(newText){
  const itemRow =document.createElement('li');
  itemRow.setAttribute('class','item_row')
  
  const item =document.createElement('div');
  item.setAttribute('class','item')
  
  const name =document.createElement('span');
  name.setAttribute('class','item_name');
  name.innerText= newText;

  const deleteBtn =document.createElement('button');
  deleteBtn.setAttribute('class','item_delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.addEventListener('click', () =>{
    items.removeChild(itemRow);
  })

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class','item_divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);
  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

 

addBtn.addEventListener('click', createItem);
input.addEventListener('keypress', event => {
  if(event.key === 'Enter'){
    createItem();
  }
});


// newDiv.appendChild(li);
// li.innerText = newText;  
// items.appendChild(li);
// input.value = '';
// const button = document.createElement('button');
// button.classList.add('item_delete')
// button.innerHTML = '<i class="fas fa-trash"></i>';
// items.appendChild(button);