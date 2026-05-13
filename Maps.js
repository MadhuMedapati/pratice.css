// var arr=[1,2,3,4];
// var ans=arr.map(function(value){
//     return value*2;
// })
// arr.forEach(function(value){
//     console.log(value);  // it cant create arrays than we use for each.
// })
// console.log(ans)


// closures
// function abcd(){
// var a=12;
// return function(){ 
// //     console.log(a)
// }
// //  sort the array
// var arr=[1,2,2,3,3,4,5,6,7,7]
//  var ans= arr.sort(function(a,b){
//     return (a-b);
//  })
console.log(ans)
// remove the duplicate and sort the array
var arr=[1,2,3,3,4,5,5,6]
var ans=[... new Set(arr)]
var newarr= ans.sort(function(a,b){
    return (b-a);
})
console.log(newarr)