document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessesibilidade=document.getElementById('bota-acessibilidade');    
const opcoesDeAcessbilidade=docuent.getElementsById('opcoes-acessibilidade');

botaoDeAcessesibilidade.addEventListener('click',function(){
    botaoDeAcessesibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessbilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado=botaoDeAcessesibilidade.getAttribute('aria-expanded')=== 'true';
})



})
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementeById('diminuir-fonte');

const alternaContraste = document.getElementById('alterna-contraste');

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`
}
)
diminuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
})

alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})


scrollReveal().reveal('#inicio', { delay: 500});
scrollReveal().reveal('#tropicalia', { delay: 500 });
scrollReveal().reveal('#galeria', { delay: 500 });
scrollReveal().reveal('#contato', { delay: 500});