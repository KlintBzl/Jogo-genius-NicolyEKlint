const colors = ['verde', 'vermelho', 'amarelo', 'azul'];
let sequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;

const startBtn = document.getElementById('start-btn');
const statusText = document.getElementById('status');

startBtn.addEventListener('click', startGame);

colors.forEach(color => {
  document.getElementById(color).addEventListener('click', () => handleClick(color));
});

function startGame() {
  sequence = [];
  level = 0;
  statusText.textContent = "Boa sorte!";
  nextLevel();
}

function nextLevel() {
  playerSequence = [];
  level++;
  statusText.textContent = `Nível ${level}`;
  const nextColor = colors[Math.floor(Math.random() * colors.length)];
  sequence.push(nextColor);
  playSequence();
}

function playSequence() {
  acceptingInput = false;
  let i = 0;
    const interval = setInterval(() => {
    const color = sequence[i];
    flashColor(color);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
      acceptingInput = true;
    }
  }, 700);
}

function flashColor(color) {
  const el = document.getElementById(color);
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 400);
}

function handleClick(color) {
  if (!acceptingInput) return;
  flashColor(color);
  playerSequence.push(color);
  const index = playerSequence.length - 1;


  if (playerSequence[index] !== sequence[index]) {
    statusText.textContent = `Game over! Você perdeu no nível ${level}.`;
    acceptingInput = false;
    return;
  }

  if (playerSequence.length === sequence.length) {
  acceptingInput = false;
  setTimeout(nextLevel, 20);
  }
}