
var kdash = document.getElementById('kdash')
var maxima = document.getElementById('maxima')
var audioKdash = document.getElementById('audio-kdash')
var audioMaxima = document.getElementById('audio-maxima')


function efeitoSonoro(personagem, audioPersonagem){
    personagem.style.border = '4px solid #FADF3C'
    personagem.style.scale = '1.15'
    personagem.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.329)'
    audioPersonagem.play()
    
}

audioKdash.addEventListener('ended', function(){
    window.location.href = 'paginas/kdash/kdash.html'
})

audioMaxima.addEventListener('ended', function(){
    window.location.href = 'paginas/maxima/maxima.html'
})
    




