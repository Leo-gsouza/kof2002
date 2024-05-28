
var kdash = document.getElementById('kdash')
var audioKdash = document.getElementById('audio-kdash')


kdash.addEventListener('mouseenter' , entrou)
kdash.addEventListener('mouseout' , saiu)
audioKdash.addEventListener('ended', terminar)

function entrou(){
    kdash.style.border = '5px solid orange'
}

function saiu(){
    kdash.style.border = '5px solid white'
}

function efeitoKdash(){
    kdash.style.border = '5px solid red'
    kdash.style.scale = '1.1'
    audioKdash.play()
    
}

function terminar(){
    window.location.href = 'paginas/k-dash/k-principal.html'
}

