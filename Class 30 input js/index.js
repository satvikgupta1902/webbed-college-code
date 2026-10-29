let inp = document.querySelector("input")
inp.addEventListener("input",function(e){
    console.log (e.target.value)
})

let h1 =document.querySelector("h1")
// inp.addEventListener("input",function(a){
// h1.innerText=a.target.value
// })

let btn = document.querySelector("button")
btn.addEventListener("click",function(){
    h1.innerText+=inp.value
    inp.value=""
})
let img = document.querySelector("img")
let ar = ["https://images.unsplash.com/photo-1506564461966-4107c88f6d29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D","https://images.unsplash.com/photo-1780053643403-d1fcec304648?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D","https://images.unsplash.com/photo-1782332576258-bcde16561e68?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"]

let n=0
img.setAttribute("height","800px")
setInterval (()=>{
    img.setAttribute('src',ar[n])
    n=(n+1)%ar.length

},1000)
