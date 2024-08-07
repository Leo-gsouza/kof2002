
function aba( botao, conteudo, desativados, fechadas){
    if (conteudo.style.display == 'block'){
        conteudo.style.display = 'none'
        botao.style.background = '#B2BEBF'
        botao.style.scale = '1'

    }else{
        conteudo.style.display = 'block'
        botao.style.background = 'darkred'
        botao.style.scale = '1.1'

        fechadas.forEach(fechada => {
            fechada.style.display = 'none'
        });
        desativados.forEach(desativado =>{
            desativado.style.background = '#B2BEBF'
            desativado.style.scale = '1'
        })
    }
   
}

