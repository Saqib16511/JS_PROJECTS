const btn = document.querySelector(".btn");
let container = document.querySelector('.container');
let boo = false;
btn.onclick = function(){
    if(container.classList.contains('light')){
        container.classList.remove('light')
        container.classList.add('red')
    }else{
        container.classList.remove('red')
        container.classList.add('light')
    }
}