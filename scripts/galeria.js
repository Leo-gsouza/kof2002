
function ampliarImagem(img){
    const sobreposicao = document.querySelector('.sobreposicao')
    const sobreImagem = document.querySelector('img')
    sobreImagem.src = img.src;
    sobreposicao.classList.add('active')

}

function fechar(){
    const sobreposicao = document.querySelector('.sobreposicao')
    sobreposicao.classList.remove('active')
}