const progress = document.querySelector('.progress');
const backbtn = document.querySelector('.backbtn');
const nextbtn = document.querySelector('.nextbtn');
const wrapprogress = document.querySelectorAll('.wrap-progress');

let currentstep = 1;

nextbtn.addEventListener('click',()=>{
    if(currentstep < wrapprogress.length){
        currentstep++;
    }
    handlstep()
})
backbtn.addEventListener('click',()=>{
    if(currentstep > 1){
        currentstep--;
    }
    handlstep()
})

function handlstep(){
    wrapprogress.forEach((item,index)=>{
        if(index < currentstep){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
    progress.style.width = ((currentstep - 1)/(wrapprogress.length - 1) * 100 + "%")
    if(currentstep == 1){
        backbtn.disabled = true;
    }else if(currentstep == wrapprogress.length){
        nextbtn.disabled = true;
    }else{
        backbtn.disabled = false;
        nextbtn.disabled = false;
    }
}