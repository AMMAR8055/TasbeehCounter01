const count0 = document.querySelector('#count--0');
const resetbutton = document.getElementsByClassName('btn--new');
const clickbutton = document.querySelector('.btn--click');
let count=0;
function addcount(){
    document.querySelector('#count--0').textContent=++count;
}

function resetcount(){ 
    count=0;
    document.querySelector('#count--0').textContent=count;
}
console.log(resetbutton,clickbutton)
clickbutton.addEventListener("click",addcount);
resetbutton[0].addEventListener("click",resetcount);