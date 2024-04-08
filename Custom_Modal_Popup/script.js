const openModal = document.querySelector('.openModal');
const modalbackground = document.querySelector('.modal-background');
const closebtn = document.querySelector('.close-btn');
const closed = document.querySelector('.close')
openModal.addEventListener('click',()=>{
    modalbackground.style.display = 'block'
});

closebtn.addEventListener('click',()=>{
    modalbackground.style.display = 'none'
});

closed.addEventListener('click',()=>{
    modalbackground.style.display = 'none'
});


window.addEventListener('click',(e)=>{
    if(e.target == modalbackground){
        modalbackground.style.display = 'none'
    } 
})