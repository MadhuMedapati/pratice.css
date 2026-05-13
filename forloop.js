// use  a for loop to iterate through an array[1,2,3,4]
// and stop when the number 4 is found
// store the numbers before 4 in a array named smll numbers
let numbers =[1,2,3,4,5]
let smallnumbers=[];
for (const num of numbers){
    if (num==4){
        break;
    }
    smallnumbers.push(num);
}
console.log(smallnumbers);


// for in object
countsymbols={
    yt:"youtube",
    x:"twitter",
    fb:"facebook",
    ig:"instagram",
}
for(const n in countsymbols){
    console.log(`key is: ${n} and value is:${countsymbols[n]}` )
}

//  for of 
const names=["sampath","madhu","bharathi","rishii"]
for(const sowmya of names){
    console.log(sowmya)
}

// for each
let fruits = ["papaya","banana","apple","guava"]

fruits.forEach(fruit => {
    console.log(fruit)
})