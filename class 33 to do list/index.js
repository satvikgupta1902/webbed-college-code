let btn = document.querySelector('button')
let inp = document.querySelector('input')
let body = document.querySelector('div')
btn.onclick = function(){
    let h2 = document.createElement("h2")
    h2.innerText=inp.value
    h2.style.display="inline-block"
    let ebut = document.createElement("button")
    ebut.innerText="Edit me"
    
    
    body.append(h2)
    body.append(ebut)
    ebut.addEventListener('click',()=>(
        h2.innerText=inp.value
    ))
}
