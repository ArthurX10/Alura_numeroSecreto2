let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numberSecret = gerarNumeroAleatorio();
console.log(numberSecret);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute(){
    let kick = document.querySelector('input').value;
    if(kick == numberSecret){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas === 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(kick < numberSecret){
        exibirTextoNaTela('p', 'Você errou! O número secreto é maior que o número escolhido');
    } else if(kick > numberSecret){
        exibirTextoNaTela('p', 'Você errou! O número secreto é menor que o número escolhido');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista === numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    let kick = document.querySelector('input');
    kick.value = '';
}

function reiniciarJogo(){
    numberSecret = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// var ultimo = frutas[frutas.length - 1]; // para pegar o ultimo elemento de um array