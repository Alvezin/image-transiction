const time = 3000;
let imgIndex = 0;
const elementoDom = document.querySelectorAll('.slider img')
const tamanho = elementoDom.length

function changeImg(){
    setInterval(() => {
        elementoDom[imgIndex].classList.remove('selected')
        
        imgIndex++

        if (imgIndex >= tamanho){
            imgIndex = 0;
        }
        
        elementoDom[imgIndex].classList.add('selected')
        
    }, time)
}

window.addEventListener('load', changeImg)
