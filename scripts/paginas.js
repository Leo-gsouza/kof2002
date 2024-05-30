var abaHistoria = document.getElementById('aba-um')
var abaGolpes = document.getElementById('aba-dois')
var abaCombates = document.getElementById('aba-tres')

var conteudoHistoria = document.getElementById('conteudo-um')
var conteudoGolpes = document.getElementById('conteudo-dois')
var conteudoCombates = document.getElementById('conteudo-tres')


function historia(){
    abaHistoria.style.background = 'darkred'
    abaHistoria.style.boxShadow ='0px 0px 10px white'
    abaHistoria.style.scale = '1.1'
    conteudoHistoria.style.display ='block'

    abaGolpes.style.background = 'none'
    abaGolpes.style.boxShadow ='none'
    abaGolpes.style.scale = 'none'
    conteudoGolpes.style.display ='none'

    abaCombates.style.background = 'none'
    abaCombates.style.boxShadow ='none'
    abaCombates.style.scale = 'none'
    conteudoCombates.style.display ='none'
}

function golpes(){
    abaGolpes.style.background = 'darkred'
    abaGolpes.style.boxShadow ='0px 0px 10px white'
    abaGolpes.style.scale = '1.1'
    conteudoGolpes.style.display ='block'

    abaHistoria.style.background = 'none'
    abaHistoria.style.boxShadow ='none'
    abaHistoria.style.scale = 'none'
    conteudoHistoria.style.display ='none'

    abaCombates.style.background = 'none'
    abaCombates.style.boxShadow ='none'
    abaCombates.style.scale = 'none'
    conteudoCombates.style.display ='none'
}

function combates(){
    abaCombates.style.background = 'darkred'
    abaCombates.style.boxShadow ='0px 0px 10px white'
    abaCombates.style.scale = '1.1'
    conteudoCombates.style.display ='block'

    abaHistoria.style.background = 'none'
    abaHistoria.style.boxShadow ='none'
    abaHistoria.style.scale = 'none'
    conteudoHistoria.style.display ='none'

    abaGolpes.style.background = 'none'
    abaGolpes.style.boxShadow ='none'
    abaGolpes.style.scale = 'none'
    conteudoGolpes.style.display ='none'
}

