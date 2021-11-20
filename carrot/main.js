const start = document.querySelector('.start-button');
const gamefield = document.querySelector('.game-field');
const fieldRect = gamefield.getBoundingClientRect();
const items = document.querySelector('.items');


function gameset() {
  //벌레와 당근을 생성하고 field에 추가
  //  console.log(fieldRect);
  createItem('carrot', 10, 'img/carrot.png');
  createItem('bug', 8, 'img/bug.png');
  updateTimer();

};

function createItem(className, count, imgPath, padding) {
  let id = 0;
  for (i = 0; i <= count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.setAttribute('data-id', id);
    id++;
    item.getBoundingClientRect();
    const x1 = Math.floor(Math.random() * (fieldRect.height / 2 - 80));
    const y1 = Math.floor(Math.random() * (fieldRect.width - 80));

    item.style.position = 'absolute';
    item.style.top = 300 + x1 + "px";
    item.style.left = y1 + "px";
    items.appendChild(item);
    item.addEventListener('click',  harvestCarrot);
  }

};

function updateTimer() {
  const timer = document.querySelector('.timer');
  let timeleft = 20;
  const downloadTimer = setInterval(function () {
    timeleft--;
    timer.textContent = `0:${timeleft}`;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      gameOver();
    }
  }, 1000)
}

function gameOver() {
  const gameover = document.querySelector('.game-over');
  const result = gameover.querySelector('span');
  result.innerHTML = `YOU LOSE`;
  gameover.classList.remove('hidden');
  // if()
}

function harvestCarrot(event) {
    const id = event.target.dataset.id;
    const rest = document.querySelector('.the-rest');
    let carrotleft = items.childElementCount;
    console.log(carrotleft);

    if (id && event.target.tagName ==="IMG" ) {
      const toBeDeleted = document.querySelector(`.carrot[data-id ="${id}"]`)
      toBeDeleted.remove();
      carrotleft--;
    }
    rest.innerHTML =`${carrotleft}`
  }



window.addEventListener('load', ( ) => {
  start.addEventListener('click', gameset ,{once : true} );
});
