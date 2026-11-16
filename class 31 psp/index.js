let h1 =document.querySelector("h1");
let de = document.querySelector("#decrease")
let inc = document.querySelector("#increase")

let c = 0



    de.addEventListener("click",function(){
        h1.innerText= --c;
    })
    inc.addEventListener("click",function(){
        h1.innerText= ++c;
    })
    

