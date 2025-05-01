const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let capituloAtual = 1;
let taTocando = false;

function atualizarFonteAudio() {
    audioCapitulo.src = 'books/dom-casmurro/' + capituloAtual + '.mp3';
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;

    audioCapitulo.addEventListener('canplaythrough', tocarDepoisDeCarregar);
}

function tocarDepoisDeCarregar() {
    audioCapitulo.play();
    taTocando = true;
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    audioCapitulo.removeEventListener('canplaythrough', tocarDepoisDeCarregar);
}

function tocarOuPausar() {
    if (taTocando) {
        audioCapitulo.pause();
        taTocando = false;
        botaoPlayPause.classList.add('bi-play-circle-fill');
        botaoPlayPause.classList.remove('bi-pause-circle-fill');
    } else {
        audioCapitulo.play();
        taTocando = true;
        botaoPlayPause.classList.remove('bi-play-circle-fill');
        botaoPlayPause.classList.add('bi-pause-circle-fill');
    }
}

function proximaFaixa() {
    capituloAtual = capituloAtual === numeroCapitulos ? 1 : capituloAtual + 1;
    atualizarFonteAudio();
}

function voltarFaixa() {
    capituloAtual = capituloAtual === 1 ? numeroCapitulos : capituloAtual - 1;
    atualizarFonteAudio();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);

// Inicializa o primeiro capítulo
atualizarFonteAudio();
