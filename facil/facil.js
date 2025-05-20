const colors = ['verde', 'vermelho', 'amarelo', 'azul'];
let sequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;

const startBtn = document.getElementById('start-btn');
const statusText = document.getElementById('status');
const lista = document.getElementById('lista-compras');

startBtn.addEventListener('click', startGame);

colors.forEach(color => {
  document.getElementById(color).addEventListener('click', () => handleClick(color));
});

function startGame() {
  sequence = [];
  level = 0;
  statusText.textContent = "Boa sorte!";
  proxLevel();
}

function proxLevel() {
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
  if(level > 10){
    statusText.textContent = "Parabéns você ganhou!";
    const yOuN = prompt("Você quer colocar seu record na lista?");
  if(yOuN === "sim"){
    const nome = prompt("Coloque seu nome:");
      
      if (nome !== '') {
        alert("Obrigado por jogar!");
        const novoItem = document.createElement('li');
        novoItem.textContent = `${nome} ${level}`;
        lista.appendChild(novoItem);
        inputItem.value = '';
        inputItem.focus();
      }
  }
    }else{
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
    
    const yOuN = prompt("Você quer colocar seu record na lista?");
  if(yOuN === "sim"){
    const nome = prompt("Coloque seu nome:");
      alert("Obrigado! Que tal tentar novamente?");
      if (nome !== '') {
        alert("Obrigado! Que tal tentar novamente?");
        const novoItem = document.createElement('li');
        novoItem.textContent = `${nome} | Nível perdido: ${level}`;
        lista.appendChild(novoItem);
        inputItem.value = '';
        inputItem.focus();
      }
  }
  return;
  }

  if (playerSequence.length === sequence.length) {
  acceptingInput = false;
  setTimeout(proxLevel, 10);
  }
};

const btnAlternar = document.getElementById("alternar");
const troca = document.querySelector("body");
let numerar = 0;

btnAlternar.addEventListener("click", (e) => {

    numerar++;

    if(numerar == 2){
      troca.classList.add("escurecer")
    }else if(numerar % 2 == 1){
      troca.classList.add("clarear")
    }
});


    