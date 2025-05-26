const cores = ['verde', 'vermelho', 'amarelo', 'azul'];
let sequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;

const ganhou = new Audio('/sons/goodresult-82807.mp3')
const perdeu = new Audio('/sons/failure-1-89170.mp3')
const jogar = new Audio('/sons/gaming-music-8-bit-console-play-background-intro-theme-342069.mp3')
jogar.loop = true;
const startBtn = document.getElementById('start-btn');
const statusText = document.getElementById('status');
const lista = document.getElementById('lista-records');

startBtn.addEventListener('click', startGame);

cores.forEach(cor => {
  document.getElementById(cor).addEventListener('click', () => handleClick(cor));
});

function startGame() {
  sequence = [];
  level = 0;
  statusText.textContent = "Boa sorte!";
  proxLevel();
  jogar.play();
}

function proxLevel() {
  playerSequence = [];
  level++;
  statusText.textContent = `Nível ${level}`;
  const nextCor = cores[Math.floor(Math.random() * cores.length)];
  sequence.push(nextCor);
  playSequence();
}

function playSequence() {
  acceptingInput = false;
  let i = 0;
  if(level > 25){
    statusText.textContent = "Parabéns você ganhou!";
    jogar.pause();
    ganhou.play();
    const yOuN = prompt("Você quer colocar seu record na lista?");
  if(yOuN === "sim"){
    const nome = prompt("Coloque seu nome:");
      
      if (nome !== '') {
        alert("Obrigado por jogar!");
        const novoItem = document.createElement('li');
        novoItem.textContent = `${nome} | Nível alcançado: ${level-1}`;
        lista.appendChild(novoItem);
        inputItem.value = '';
        inputItem.focus();
      }
  }
    }else{
    const interval = setInterval(() => {
    const cor = sequence[i];
    flashCor(cor);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
      acceptingInput = true;
    }
  }, 700);
    }
  

}


function flashCor(cor) {
  const el = document.getElementById(cor);
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 400);
  if(cor == "verde"){
    Verde.play();
  }else if(cor == "vermelho"){
    Vermelho.play();
  }else if(cor == "amarelo"){
    Amarelo.play();
  }else if(cor == "azul"){
    Azul.play();
  }
}

function handleClick(cor) {
  if (!acceptingInput) return;
  flashCor(cor);
  playerSequence.push(cor);
  const index = playerSequence.length - 1;


  if (playerSequence[index] !== sequence[index]) {
    statusText.textContent = `Game over! Você perdeu no nível ${level}.`;
    acceptingInput = false;
    jogar.pause();
    perdeu.play();
    
    const yOuN = prompt("Você quer colocar seu record na lista?");
  if(yOuN === "sim"){
    const nome = prompt("Coloque seu nome:");
      alert("Obrigado! Que tal tentar novamente?");
      if (nome !== '') {
        alert("Obrigado! Que tal tentar novamente?");
        const novoItem = document.createElement('li');
        novoItem.textContent = `${nome} | Nível em que perdeu: ${level}`;
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

const btnAlternarE = document.getElementById("alternarE");
const btnAlternarC = document.getElementById("alternarC");
const troca = document.querySelector("body");

btnAlternarC.addEventListener("click", (e) => {
      troca.classList.add("escurecerB");
      startBtn.classList.add("escurecerStart");
      statusText.classList.add("escurecerText");

});

btnAlternarE.addEventListener("click", (e) => {
      troca.classList.remove("escurecerB");
      startBtn.classList.remove("escurecerStart");
      statusText.classList.remove("escurecerText");
})