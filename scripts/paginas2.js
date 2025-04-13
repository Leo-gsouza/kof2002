
document.getElementById("voltar").addEventListener("click", ()=> {
    window.location.href = '../index.html';
})

function aba( botao, conteudo, desativados, fechadas){
    if (conteudo.style.display == 'flex'){
        conteudo.style.display = 'none'

    }else{
        conteudo.style.display = 'flex'
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
   


