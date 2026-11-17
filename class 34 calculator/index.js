let inp = document.querySelector('input')
let button = document.querySelectorAll('button')
for (let btn of button){
    btn.addEventListener("click",function(){
        let text = btn.innerText
        if (text === 'C' ){
            inp.value=""
        }
        else if (text === '='){
            inp.value = eval(inp.value)
        }
        else if (text === '⏪'){
            inp.value=inp.value.slice(0,-1)
        }
        else{
            inp.value += text 
        }
    })
}