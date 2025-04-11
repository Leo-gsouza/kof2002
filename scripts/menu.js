var buttonPlay = document.getElementById('play')
var buttonPause = document.getElementById('pause')

window.addEventListener('pageshow', function(event){
        if (event.persisted){
                window.location.reload()
                /* se a pagina foi restaurada do cache de historico, recarregue-a */
         }
})

function clickMenu(){
        if (itens.style.display == 'block'){
                itens.style.display = 'none'
        }else{
                itens.style.display = 'block'
        }
}

function playMusic(musica){
        if(musica.paused){
                musica.play()
                buttonPause.style.display = 'block'
                buttonPlay.style.display = 'none'
               
        }else{
                musica.pause()
                buttonPlay.style.display = 'block'
                buttonPause.style.display = 'none'
               
        }
}
