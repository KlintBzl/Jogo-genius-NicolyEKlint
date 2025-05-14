const cores = ['verde', 'amarelo', 'vermelho', 'azul'];
let sequencia = [];
let sequenciaDoJogador = [];
let nivel = 0;
let aceitandoInput = false;

const startBtn = document.getElementById('btn-start');
const atualizarText = document.getElementById('text-atualizar');

startBtn.addEventListener('click', startgame);

cores.forEach(cor => {
    document.getElementById(cor).addEventListener('click', () => handleClick(cor));
});

function comecarJogo(){
    sequencia = [];
    nivel = 0;
    atualizarText.textContent = "Boa sorte!";
    proximoN();
}

function proximoN() {
    sequenciaDoJogador = [];
    nivel++;
    atualizarText.textContent = `Nível ${nivel}`;
    const proxCor = cores[Math.floor(Math.random() * cores.length)];
    sequencia.push(proxCor);
    sequenciar();
}

function sequenciar(){
    aceitandoInput = false;
    let i = 0;
    const intervalo = setInterval(() =>  {

    const cor = sequence[i];
        corFlash(cor);
        i++;
        if (i >= sequence.length){
            clearInterval(intervalo);
            aceitandoInput = true;
        }      
    }, 700);
}

function corFlash(cor) {
  const el = document.getElementById(cor);
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 400);
}

function clickManual(cor) {
  if (!aceitandoInput) return;
  corFlash(cor);
  sequenciaDoJogador.push(cor);
  const index = sequenciaDoJogador.length - 1;

  if (sequenciaDoJogador[index] !== sequencia[index]) {
    atualizarText.textContent = `Erro! Você perdeu no nível ${nivel}.`;
    aceitandoInput = false;
    return;
  }

  if (sequenciaDoJogador.length === sequencia.length) {
    aceitandoInput = false;
    setTimeout(nextLevel, 10);
  }
}