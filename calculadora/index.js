function resultado(){
    let display = document.getElementById('display').value
    const res = eval(display)
    return res
}

document.addEventListener('keypress', function(ev){
    if(ev.key === "Enter"){
        document.getElementById('display').value = resultado()
    }
})
document.getElementById('value').addEventListener('click', function(){
    document.getElementById('display').value = resultado()
})

let buttons = document.querySelectorAll('button')
buttons.forEach(function(item){
    item.addEventListener("click", function(){
        const dataInfo = this.dataset.info
            if(dataInfo == "AC"){
                document.getElementById('display').value = ""
            }else if(dataInfo == ""){
                return
            }else{
                document.getElementById('display').value += dataInfo
            }
    })
})