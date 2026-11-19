var button = document.querySelectorAll(".box")
let inp = document.querySelector('input')
for(let btn of button){
    btn.addEventListener('click',function(){
        var btnName = btn.innerHTML.toUpperCase()
        var audio = document.querySelector("#"+btnName)
        audio.currentTime = 0
        audio.play()

    })
    
}
document.addEventListener("keydown",function(event){
        var btnName = event.key.toUpperCase()
        var audio = document.querySelector("#"+btnName)
        audio.currentTime = 0
        audio.play()
})