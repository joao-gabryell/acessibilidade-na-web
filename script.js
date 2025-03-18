document.addEventListener('DOMContentLoaded',function(){
    const aumentarfonteBotao=Document.getElementById('aumentar-fonte');
    const diminuiFonteBotao=Document.getElementById('diminuir-fonte');

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