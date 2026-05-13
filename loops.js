// let sum=0;
// let i=0;
// while (i<=5){
//     sum=sum+i;
//     i++;

// }
// console.log(sum);


// let countdown=[];
// let j=5;
// while(j>0){
//     countdown.push(j);
//     console.log(countdown)
//     j--;

// }
// console.log(countdown)


// let total=0;
// let k=1;
// do{
//     total =total+k;
//     k++;
// }
// while(k<=j)
//     console.log(total)


// let a=[1,2,3,4,5]
// let b=[]
// for(let i=0;i<a.length;i++){
// b.push(a[i]*2)
// }
// console.log(b)

let cities=["paris","USA","europe","london"]
let visitedcities=[]
 for(let i=0;i<cities.length;i++){
    if(cities[i]=="europe"){
        continue;
    }
    visitedcities.push(cities[i])
 }
 console.log(visitedcities)
 

