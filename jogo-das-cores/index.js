let ultiDig = null
function color(){
    const divQuadrado = document.getElementById('quadrado')
    let numId = 0

    do{
        numId = Math.floor(Math.random() * 3)
    }while(numId === ultiDig)
        ultiDig = numId

    divQuadrado.className = 'btn-' + numId
    divQuadrado.dataset.value = 'btn-' + numId
}

document.getElementById('btn').addEventListener('click', () => {
    const divQuadrado = document.getElementById('quadrado')
    const cor = document.querySelector('input[name="cor"]:checked').value

    if(divQuadrado.dataset.value === cor){
        alert("Certa resposta")
    }else{
        alert("Tente novamente!")
    }
    color()
})