let counter=document.querySelector('#count');
let plus_symbol=document.querySelector('.plus');
let count=0;
plus_symbol.addEventListener("click",function(){
 console.log("Add button")
 count++;
 counter.innerHTML=count;
})
let minus_symbol=document.querySelector('.minus');
minus_symbol.addEventListener("click",function(){
    count--;
    counter.innerHTML=count;
})
let reset_symbol=document.querySelector('.reset');
reset_symbol.addEventListener("click",function(){
    count=0;
    counter.innerHTML=count;
})