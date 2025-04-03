document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessesibilidade=document.getElementById('bota-acessibilidade');    
const opcoesDeAcessbilidade=docuent.getElementsById('opcoes-acessibilidade');

botaoDeAcessesibilidade.addEventListener('click',function(){
    botaoDeAcessesibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessbilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado=botaoDeAcessesibilidade.getAttribute('aria-expanded')=== 'true';
})



})

