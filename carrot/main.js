const start = document.querySelector('.start_button');
const gamefield = document.querySelector('.game_field');
const fieldRect = gamefield.getBoundingClientRect();
const items = document.querySelector('.items');

function gameset() {
//벌레와 당근을 생성하고 field에 추가
//  console.log(fieldRect);
  createItem('carrot', 10, 'img/carrot.png');
  createItem('bug', 8, 'img/bug.png');
 

};

function createItem(className, count, imgPath, padding) { 
  for (i = 0; i < count; i++) {
    const item= document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.getBoundingClientRect();
    const x1 = Math.floor(Math.random() * (fieldRect.height/2 - 80));
    const y1 = Math.floor(Math.random() * (fieldRect.width - 80));
   
    item.style.position ='absolute';
    item.style.top = 300+ x1  +"px";
    item.style.left = y1  +"px";
    items.appendChild(item);
  }; 
};

window.addEventListener('load', ()=>{
  start.addEventListener('click', gameset);
});
 