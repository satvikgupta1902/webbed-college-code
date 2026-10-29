// let h1= document.getElementById("hone");
// h1.style.color='green'
// h1.innerText="siubssb"
// let e1 = document.getElementsByClassName('hc');
// // e1[1].style.color = 'red'
// for (let i of e1 ){
//     i.style.color='yellow'
// }


// let e2 = document.querySelector('h1')
// e2.style.color='red'
// let e2 = document.querySelectorAll("h1")
// e2[1].style.color='red'
// let e2 = document.querySelector('#hone')
// e2.style.color='red'
// let e2 = document.querySelector('.hc')
// e2[0].style.color='red'

// let btn= document.querySelector('button')
// let body = document.querySelector('body')

// btn.onclick = function(){
//     body.style.backgroundColor='black'
// }
 
let i =0;
let btn= document.querySelector('button')
let body = document.querySelector('body')
let a = true
btn.onclick = function(){
if (a){

    body.style.backgroundColor='red'
    a=false;
}
else {

    body.style.backgroundColor='black'
    a=true
}}
i++;
