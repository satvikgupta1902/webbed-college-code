let arr =[1,2,3,4,5]
for (let i in arr){
    console.log (i)
}

for (let i of arr){
    console.log(i)
}




let student ={
    name : "Satvik",
    lastname:"Gupta",
    age: 18
}
console.log(student.age);
console.log(student.name);

let a = [1,2,3,4,5,[6,7,8]]
console.log(a[5][1])
// for (let i of arr[5]){
//     console.log(i)
// }



for (let i =1; i<=3;i++){
    let star = ""
    for (let j=1;j<=i;j++ ){
        star+="* "
}
console.log (star)}

let spc = 2

for (let i = 0;i<3;i++){
let out =""
    for (let j = 0;j<spc;j++){
        out+="  "
    }
    for (let j = 0;j<=i;j++){
        out+="* "
    }    
    console.log(out);
    spc--;
    
}


