var buttonMusic = document.getElementById('music')
var musicaSelect = document.getElementById('audio-select')
var teamKdash = document.getElementById('music-team-kdash')


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
                buttonMusic.style.background = 'red'
                buttonMusic.style.boxShadow = '0px 0px 15px black'
        }else{
                musica.pause()
                buttonMusic.style.background = 'darkslategray'
                buttonMusic.style.boxShadow = '0px 0px 15px white'
        }
}
