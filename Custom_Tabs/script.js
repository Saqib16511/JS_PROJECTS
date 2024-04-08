const container = document.querySelector(".container");
const btn = document.querySelectorAll(".tab-button");
const content = document.querySelectorAll(".content");

container.addEventListener('click',(main)=>{
    // console.log(main.target.dataset)
    const currentid = main.target.dataset.id;
    if(currentid){
        btn.forEach(btn=>{
            btn.classList.remove('active');
        });
        main.target.classList.add('active');
        content.forEach(content=>{
            content.classList.remove('active');
        });
        const id = document.getElementById(currentid);
        id.classList.add('active')
    };
})