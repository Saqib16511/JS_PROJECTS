const stars = document.querySelectorAll('.fa-star-o');
const srvt = document.querySelector('.selected-rating-value');

let ctss = -1;
stars.forEach((staritm,index)=>{
    staritm.dataset.rating = index +1; 
    staritm.addEventListener('mouseover',handlemouseover);
    staritm.addEventListener('click', handleOnClick);
    staritm.addEventListener('mouseleave',handlemouseleave)   
});

function handlemouseover(event){
    const crv = event.target.dataset.rating;
    if(!crv) return;
    else huprs(crv);
};

function huprs(getcrv){
    for(let i = 0;i < 5;i++){

        if(i < getcrv){
            stars[i].classList.replace("fa-star-o","fa-star");
        }else{
            stars[i].classList.replace("fa-star","fa-star-o")
        }
    }
};

function handleOnClick(event){
    const crv = event.target.dataset.rating;
    ctss = crv;
    huprs(ctss);
    srvt.textContent = ctss
};

function handlemouseleave(){
    huprs(ctss)
}