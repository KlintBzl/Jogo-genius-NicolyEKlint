const cores = ['verde', 'vermelho', 'amarelo', 'azul'];
let sequence = [];
let playerSequence = [];
let level = 0;
let acceptingInput = false;

const ganhou = new Audio('./sons/ganhar.mp3');
const perdeu = new Audio('./sons/falha.mp3');

const Verde = new Audio('./sons/green.mp3');
const Azul = new Audio('./sons/blue.mp3');
const Vermelho = new Audio('./sons/red.mp3');
const Amarelo = new Audio('./sons/yellow.mp3');

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
  if(level > 10){
    statusText.textContent = "Parabéns você ganhou!";
    ganhou.play();
  }
  if(level > 10){
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

document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("mudo");
  const audio = document.getElementById("ambiente");

  botao.addEventListener("click", function () {
    audio.muted = false;
    audio.play();
    botao.textContent = "Mutar Som";


    botao.addEventListener("click", function () {
      audio.muted = !audio.muted;
      botao.textContent = audio.muted ? "Ativar Som" : "Mutar Som";
    });
  }, { once: true }); 
});