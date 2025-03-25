document.addEventListener('DOMContentLoaded',function(){
const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade=document.getElementById('botao-acessibilidade')

botaoDeAcessibilidade.addEventListener('click',function(){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
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

})