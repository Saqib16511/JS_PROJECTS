const data = [
    {
        id : '1',
        question: "What is web development?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, autem? Velit error dolor recusandae quo maiores ",
    },
    {
        id : '2',
        question: "What is Frontend web development?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, autem? Velit error dolor recusandae quo maiores ",
    },
    {
        id : '3',
        question: "What is Backend web development?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, autem? Velit error dolor recusandae quo maiores ",
    },
];

const accordionWrapper = document.querySelector('.accordion');

function accordiondata(){
    accordionWrapper.innerHTML = data
    .map(
        item=>`<div class = 'accordion_item'>
        <div class = "accordion_title">
        <h3>${item.question}</h3>
        <i class="fa-solid fa-arrow-down"></i> 
        </div>
        <div class="accordion-content">
        <p>${item.answer}</p></div>
        </div>`
    )
    .join(" ");    
};
accordiondata()

const accordiontitles = document.querySelectorAll('.accordion_title');

console.log("=====================")
console.log(accordiontitles)
console.log("=====================")

accordiontitles.forEach(currentitem =>{
    currentitem.addEventListener('click',(event)=>{
        if(currentitem.classList.contains('active')){
            currentitem.classList.remove('active')
        }else{
            let getactiveclass = document.querySelectorAll('.active');
            getactiveclass.forEach(activeitem=>{
                activeitem.classList.remove('active')
            });
            currentitem.classList.add('active')
        }

    });
});