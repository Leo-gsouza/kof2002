
document.getElementById("voltar").addEventListener("click", ()=> {
    window.location.href = '../index.html';
})

function aba( botao, conteudo, desativados, fechadas){
    
    if (conteudo.style.display == 'flex'){
        conteudo.style.display = 'flex'

    }else{
        conteudo.style.display = 'flex'
        botao.style.scale = '1.1'
        botao.style.backgroundColor = 'var(--cor0)'
        botao.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.425)'
        botao.classList.add('glow')

        }

        fechadas.forEach(fechada => {
            fechada.style.display = 'none'
        });


        if (window.innerWidth >= 600){
            desativados.forEach(desativado =>{
            desativado.style.scale = '1'
            desativado.style.backgroundColor = 'var(--cor2)'
            desativado.style.boxShadow = 'none'
            desativado.classList.remove('glow') 
            })

        }else{
            desativados.forEach(desativado =>{
            desativado.style.scale = '1'
            desativado.style.backgroundColor = 'var(--cor0)'
            desativado.style.boxShadow = 'none'
            desativado.classList.remove('glow') 
        })
    }
}

var golpe = document.getElementById('golpes2')

let ampliado = false

/* golpe.addEventListener("click", () => {
    if(!ampliado){
        golpe.style.transform = 'scale(1.2)'
        golpe.style.boxShadow = '0px 0px 100px black'
        golpe.style.background = 'white'

    }else{
        golpe.style.transform = 'scale(1)'
        golpe.style.boxShadow = 'none'
        golpe.style.background = 'transparent'
    }
    ampliado = !ampliado

}) */
   


