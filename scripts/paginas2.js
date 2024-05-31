
var h = document.getElementById('aba-um')
var g = document.getElementById('aba-dois')
var d = document.getElementById('aba-tres')
var c = document.getElementById('aba-quatro')

var ch = document.getElementById('conteudo-um')
var cg = document.getElementById('conteudo-dois')
var cd = document.getElementById('conteudo-tres')
var cc = document.getElementById('conteudo-quatro')


function aba(aba_on, cont_on, aba_off1, cont_off1, aba_off2, cont_off2, aba_off3, cont_off3){

    aba_on.style.background = 'darkred'
    aba_on.style.boxShadow ='0px 0px 10px white'
    aba_on.style.scale = '1.1'
    aba_on.style.borderRadius = '5px'
    aba_on.style.border = '1px solid white'
    cont_on.style.display = 'block'
    
    aba_off1.style.background = 'none'
    aba_off1.style.boxShadow ='none'
    aba_off1.style.scale = 'none'
    aba_off1.style.border = 'none'
    cont_off1.style.display ='none'

    aba_off2.style.background = 'none'
    aba_off2.style.boxShadow ='none'
    aba_off2.style.scale = 'none'
    aba_off2.style.border = 'none'
    cont_off2.style.display ='none'

    aba_off3.style.background = 'none'
    aba_off3.style.boxShadow ='none'
    aba_off3.style.scale = 'none'
    aba_off3.style.border = 'none'
    cont_off3.style.display ='none'
   
}

