
var kdash = document.getElementById('kdash')
var maxima = document.getElementById('maxima')
var audioKdash = document.getElementById('audio-kdash')
var audioMaxima = document.getElementById('audio-maxima')


function efeitoSonoro(personagem, audioPersonagem){
    personagem.style.border = '5px solid red'
    personagem.style.scale = '1.1'
    audioPersonagem.play()
    
}

audioKdash.addEventListener('ended', function(){
    window.location.href = 'paginas/kdash/kdash.html'
})

audioMaxima.addEventListener('ended', function(){
    window.location.href = 'paginas/maxima/maxima.html'
})
    




