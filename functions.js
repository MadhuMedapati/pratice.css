function abcd(){

}


function qbc(a,b,c,...rest){
    console.log(a,b,c,rest);
}
qbc(1,2,3,4,5,6,7,8,9);

//  HOF  
//  it  takes one or more functions as arguments

function abc(){
    return function(){
        console.log("hello")
    }
}
console.log(abc());


// ex2
function abc(){
    return function(){
        return function(){
            console.log("hello");
        }
    }
}
abc()()();
//  call back functions
// case 2:
function abc(fnc){
    fnc();
}

 abc(function(){
    console.log("hello Madhu");
});

// pure functions
function add(a,b){
    return a+b;

}
console.log(add(2,3))

// impure functions
let total=0 
function addtotal(a){
    tottal=total+a;

}
addtotal(5);
console.log(total)