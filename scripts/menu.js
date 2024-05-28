var buttonMusic = document.getElementById('music')
var musicaSelect = document.getElementById('audio-select')


function clickMenu(){
        if (itens.style.display == 'block'){
                itens.style.display = 'none'
        }else{
                itens.style.display = 'block'
        }
}

function playMusic(){
        if(musicaSelect.paused){
                musicaSelect.play()
                buttonMusic.style.background = 'red'
                buttonMusic.style.boxShadow = '0px 0px 15px black'
        }else{
                musicaSelect.pause()
                buttonMusic.style.background = 'darkslategray'
                buttonMusic.style.boxShadow = '0px 0px 15px white'
        }
}
