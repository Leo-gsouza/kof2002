   

document.addEventListener("DOMContentLoaded", function(){
    const personagens = document.querySelectorAll("#caracterSelect1 img, #caracterSelect2 img");
    const imagemExibida = document.getElementById("imagemExibida");
    const imagemVazia = document.getElementById("imagemVazia")
    const som = document.getElementById('arcade')

    personagens.forEach((personagem) => {
        personagem.addEventListener("mouseover", function(){
            const novaImagem = personagem.dataset.imagem;
            imagemExibida.src = novaImagem
            imagemExibida.style.display = 'block'
            imagemExibida.classList.add('escala2')
            imagemVazia.style.display = 'none'
            personagem.classList.add('escala')
            
            if(window.innerWidth > 600){
                som.currentTime = 0;
                som.play(); 
            }
        })
        personagem.addEventListener("mouseout", function (){
            imagemExibida.style.display = 'none'
            imagemVazia.style.display = 'block'
            personagem.style.boxShadow = 'none'
            personagem.classList.remove("escala")

            
        })

        personagem.addEventListener("click", function(){
            const vozes = personagem.dataset.som; /* Buscar o data-som */
            const pagina = personagem.dataset.src;/* Buscar o data-src */
            
            if (vozes){
                const elVozes = new Audio(vozes)
                elVozes.play()

                /* Esperar o audio encerrar para abrir a pagina */
                elVozes.addEventListener("ended", function(){
                    if (pagina) {
                        window.location.href = pagina
                    }
                    else if (pagina){
                        window.location.href = pagina
                    }
                })
            }
        })

    })

})


