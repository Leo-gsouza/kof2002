
function aba( botao, conteudo, desativados, fechadas){
    if (conteudo.style.display == 'block'){
        conteudo.style.display = 'none'
        botao.style.background = '#B2BEBF'
        botao.style.borderRadius = '0px'

        
       

    }else{
        conteudo.style.display = 'block'
        botao.style.background = 'darkred'
        botao.style.borderRadius = '5px'

       

        fechadas.forEach(fechada => {
            fechada.style.display = 'none'
        });
        desativados.forEach(desativado =>{
            desativado.style.background = '#B2BEBF'
            desativado.style.scale = '1'
        })
    }
   
}

