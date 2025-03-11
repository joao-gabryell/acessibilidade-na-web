document.addEventListener('DOMContentLoaded'),function(){
    const aumentarfonteBotao=Document.getElementById('aumentar-fonte');

    let tamanhoAtulFonte=1;
    aumentarfonteBotao.addEventListener('click',function(){
        tamanhoAtual+= 0,1;
        document.body.style.fontSize = `${tamanhoAtulFonte}rem`
diminuiFonteBotao.addEventListener('click',function(){
    tamanhoAtulFonte -=0,1;
    document.body.style.fontSize=`${tamanhoAtulFonte}rem`
}
})

}