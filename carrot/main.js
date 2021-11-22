const start = document.querySelector('.start-button');
const replay = document.querySelector('.replay');
const gamefield = document.querySelector('.game-field');
const fieldRect = gamefield.getBoundingClientRect();
const items = document.querySelector('.items');
const timer = document.querySelector('.timer');
let downloadTimer;
let timeleft = 8;

function gameset() {
  //벌레와 당근을 생성하고 field에 추가
  createItem('carrot', 10, 'img/carrot.png');
  createItem('bug', 8, 'img/bug.png');
  updateTimer();
   downloadTimer = setInterval(updateTimer, 1000);
};

function resetGame(){
  gameset();
}
function createItem(className, count, imgPath) {
  let id = 0;
  for (i = 0; i < count; i++) {
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

    item.addEventListener('click', harvestCarrot);
  }
};

function updateTimer() {
  if (timeleft === 0) {
    clearInterval(downloadTimer);
    gameOver(0);
    return;
  }
  timeleft--;
  timer.textContent = `0:${timeleft}`;
  return;
}
 
function gameOver(end) {
  const gameover = document.querySelector('.game-over');
  const result = gameover.querySelector('span');
  if (end === 0) {
    result.innerHTML = `YOU LOSE`;
    gameover.classList.remove('hidden');
  } else if (end === 1) {
    result.innerHTML = `YOU WON`;
    gameover.classList.remove('hidden');
  };
}

function harvestCarrot(event) {
  const id = event.target.dataset.id;
  const rest = document.querySelector('.the-rest');
  let carrotleft = items.getElementsByClassName('carrot').length;


  if (id && event.target.className === "carrot") {
    const toBeDeleted = document.querySelector(`.carrot[data-id ="${id}"]`)
    toBeDeleted.remove();
    carrotleft--;
    rest.innerHTML = carrotleft;
  } else if (event.target.className === "bug") {
    gameOver(0);
    clearInterval(downloadTimer);
  }
  if (carrotleft == 0) {
    gameOver(1);
    clearInterval(downloadTimer);
  }
}



window.addEventListener('load', () => {
  start.addEventListener('click', gameset, {
    once: true
  });
  replay.addEventListener('click', resetGame, {
    once: true
  });
});