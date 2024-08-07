var kdashAud = document.getElementById('audiokdash') 
var maximaAud = document.getElementById('audiomaxima')
var whipAud = document.getElementById('audiowhip')


function efeitoSonoro(personagem, audioPersonagem){
    personagem.style.border = '4px solid #FADF3C'
    personagem.style.scale = '1.1'
    personagem.style.boxShadow = '3px 3px 7px rgba(0, 0, 0, 0.329)'
    audioPersonagem.play()
    
}
/* Esperar o audio encerrar para abrir a pagina */
kdashAud.addEventListener('ended', function(){
    window.location.href = 'paginas/kdash/kdash.html'
})

maximaAud.addEventListener('ended', function(){
    window.location.href = 'paginas/maxima/maxima.html'
})

whipAud.addEventListener('ended', function(){
    window.location.href = 'paginas/whip/whip.html'
}) 

    




