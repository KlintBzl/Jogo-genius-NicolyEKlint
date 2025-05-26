const cores = ['verde', 'vermelho', 'amarelo', 'azul'];
let sequencia = [];
let sequenciaPlayer = [];
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
  document.getElementById(cor).addEventListener('click', () => clickManual(cor));
});

function startGame() {
  sequencia = [];
  level = 0;
  statusText.textContent = "Boa sorte!";
  proxLevel();
  jogar.play();
}

function proxLevel() {
  sequenciaPlayer = [];
  level++;
  statusText.textContent = `Nível ${level}`;
  const nextCor = cores[Math.floor(Math.random() * cores.length)];
  sequencia.push(nextCor);
  playSequencia();
}

function playSequencia() {
  acceptingInput = false;
  let i = 0;
  
    const interval = setInterval(() => {
    const cor = sequencia[i];
    flashCor(cor);
    i++;
    if (i >= sequencia.length) {
      clearInterval(interval);
      acceptingInput = true;
    }
  }, 700);
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

function clickManual(cor) {
  if (!acceptingInput) return;
  flashCor(cor);
  sequenciaPlayer.push(cor);
  const index = sequenciaPlayer.length - 1;


  if (sequenciaPlayer[index] !== sequencia[index]) {
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

  if (sequenciaPlayer.length === sequencia.length) {
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