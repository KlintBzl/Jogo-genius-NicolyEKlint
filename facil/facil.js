const cores = ['verde', 'amarelo', 'vermelho', 'azul'];
let sequencia = [];
let sequenciaDoJogador = [];
let nivel = 0;
let aceitandoInput = false;

const startBtn = document.getElementById('btn-start');
const atualizacaoText = document.getElementById('text-atualizar');

startBtn.addEventListener('click', startgame);

cores.forEach(cor => {
    document.getElementById(cor).addEventListener('click')
})