const slider = document.querySelector(".slider");
const url = "https://picsum.photos/v2/list?page=1&limit=5";
const dotscontainer = document.querySelector(".dots-container");
async function fetchimg(){
    try {
        const response = await fetch(url);
        const result = await response.json();
        if(result && result.length > 0) displayImages(result)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
};
fetchimg()

function displayImages(imglist){
    slider.innerHTML = imglist.map(item=>`
    <div class="slide">
    <img src=${item.download_url} alt=${item.id} />
    </div>`
    ).join("");

    dotscontainer.innerHTML = imglist.map((item, index)=>`
    <span class="dot ${index == 0 ? 'active': ''}" data-slide=${index}></span>`
    ).join("");

};

// SLIDER FUNCTION
setTimeout(()=>{
const slides = document.querySelectorAll(".slide");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

let currentslide = 0;   


    
    function activedot(slide){
        document.querySelectorAll(".dot").forEach(dotitem=> dotitem.classList.remove("active"));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active')
    }
    function changecurrentslide(currentslide){
        slides.forEach(
            (slideitem,index)=>
            (slideitem.style.transform = `translateX(${
                100 * (index - currentslide)
            }%)`)
        )
    }
    changecurrentslide(currentslide)
    nextbtn.addEventListener('click',()=>{
        currentslide++
        if(slides.length - 1 < currentslide){
            currentslide = 0
        };
        changecurrentslide(currentslide);
        activedot(currentslide)
    });
    prevbtn.addEventListener('click',()=>{
        currentslide--
        if(0 >= currentslide){
            currentslide = slides.length - 1
        };
        changecurrentslide(currentslide);
        activedot(currentslide)
    });

    dotscontainer.addEventListener("click",(event)=>{
        if(event.target.classList.contains('dot')){
            const currentslides = event.target.dataset.slide
            changecurrentslide(currentslides);
            activedot(currentslides)
        }
    });
    
},1000);