document.addEventListener('DOMContentLoaded',function(){
const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade=document.getElementById('botao-acessibilidade')
const alternaContraste=document.getElementById('alterna-ccontraste')

botaoDeAcessibilidade.addEventListener('click',function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    const botaoSelecionado=botaoDeAcessibilidade.getElementById('aria-expanded')==='true';
    botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)
})


    const aumentarfonteBotao=document.getElementById('aumentar-fonte');
    const diminuiFonteBotao=document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte=1;

    aumentarfonteBotao.addEventListener('click',function(){
        tamanhoAtual+= 0,1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

 diminuiFonteBotao.addEventListener('click',function(){
    tamanhoAtualFonte -=0,1;
    document.body.style.fontSize=`${tamanhoAtualFonte}rem`

 })
alternaContraste.addEventListener ('click',function(){
    document.body.classList.toggle(auto-ccontraste)
})
    
})