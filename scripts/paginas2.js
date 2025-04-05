
document.getElementById("voltar").addEventListener("click", ()=> {
    window.location.href = '../../index.html';
})


function aba( botao, conteudo, desativados, fechadas){
    if (conteudo.style.display == 'block'){
        conteudo.style.display = 'none'
        botao.style.borderRadius = '0px'
        


    }else{
        if (conteudo.id === 'c1'){
            conteudo.style.display = 'flex'
        }else{
            conteudo.style.display = 'block'
            botao.style.scale = '1.1'
            botao.classList.add('glow')

        }

       

        fechadas.forEach(fechada => {
            fechada.style.display = 'none'
        });

        desativados.forEach(desativado =>{
            desativado.style.scale = '1'
            desativado.classList.remove('glow')
        })
    }
   
}

