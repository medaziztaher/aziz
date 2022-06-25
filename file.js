var array1=[{id:1,name:"aziz",age:18},{id:2,name:"rayen",age:19},{id:3,name:"raed",age:20},{id:4,name:"rouja",age:21}]
// array1.forEach(element => {
//     console.log(element)
// });
var mapping=(element,index)=>element["age"]
//  console.log(array1.map(mapping))
// var array2=[array1.forEach(element=>{
//      element *2  
// }

//     )]
// console.log(array2)
console.log(array1.map(mapping))
var fnct=(element,index)=>{
    let x=element
    if (x.age>20){
        x.age+=2
    }
    else{
        x.age+=1
    }
    return x["age"]
}
let array2=array1
array2=array2.map(fnct)
console.log(array2)





