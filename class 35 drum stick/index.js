var button = document.querySelectorAll(".box")
let inp = document.querySelector('input')
for(let btn of button){
    btn.addEventListener('click',function(){
        let btnName = btn.innerHTML.toUpperCase()
        let audio = document.querySelector("#"+btnName)
        audio.currentTime = 0
        audio.play()

    })
    
}