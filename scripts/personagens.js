
var kdash = document.getElementById('kdash')
var maxima = document.getElementById('maxima')
var whip = document.getElementById('whip')
var audioKdash = document.getElementById('audio-kdash')
var audioMaxima = document.getElementById('audio-maxima')
var audioWhip = document.getElementById('audio-whip')


function efeitoSonoro(personagem, audioPersonagem){
    personagem.style.border = '4px solid #FADF3C'
    personagem.style.scale = '1.1'
    personagem.style.boxShadow = '3px 3px 7px rgba(0, 0, 0, 0.329)'
    audioPersonagem.play()
    
}

audioKdash.addEventListener('ended', function(){/* Esperar o audio encerrar para abrir a pagina */
    window.location.href = 'paginas/kdash/kdash.html'
})

audioMaxima.addEventListener('ended', function(){
    window.location.href = 'paginas/maxima/maxima.html'
})

audioWhip.addEventListener('ended', function(){
    window.location.href = 'paginas/whip/whip.html'
})
    




