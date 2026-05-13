//  create a function that takes a call back and excutes a after an n seconds
function abc(fn,time){
    setInterval(fn,time);
}
abc (function(){
    console.log("again and again");
},2000)


//  using Timeout
function abc(fn,time){
    setTimeout(fn,time);
}
abc (function(){
    console.log("Only Once");
},2000)