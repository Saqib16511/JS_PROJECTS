const caterogies = [
    {
        id: 'Men',
        name: "Men's Clothing",
    },
    {
        id: 'Men',
        name: "Men's Clothing",
    },
    {
        id: 'Men',
        name: "Men's Clothing",
    },
    {
        id: 'Women',
        name: "Women's Clothing"
    },
    {
        id: 'Women',
        name: "Women's Clothing"
    },
    {
        id: 'Women',
        name: "Women's Clothing"
    },
    {
        id: 'Kids',
        name: "Children's Clothing"
    },
    {
        id: 'Kids',
        name: "Children's Clothing"
    },
    {
        id: 'Kids',
        name: "Children's Clothing"
    }
];
const filterbtn = document.querySelector('.all');
const content = document.querySelector('.content');
const mendata = document.querySelector('.men');
const all = document.querySelector('.all');
const women = document.querySelector('.women');
const kids = document.querySelector('.kids')


function filterall() {

    let myProducts = caterogies;
    console.log("mmmm", myProducts)
    myProducts.forEach(element => {

        let newdiv = document.createElement('div');
        newdiv.className = `newdiv ${element.id}`;
        newdiv.textContent = element.id;
        // content.innerHTML = newdiv.innerText
        console.log(element)
        content.appendChild(newdiv)


    });
}
filterall();
const cards = document.querySelectorAll('.content > div')

all.addEventListener('click', () => {
    cards.forEach(allclass =>{
           allclass.style.display = 'block'
    });
});

let memcl = document.querySelectorAll('.Men');
mendata.addEventListener('click', () => {
    cards.forEach(findclass =>{
           findclass.style.display = 'none'
           memcl.forEach(showmen =>{
            showmen.style.display = 'block'
           });
    });
});

let womemcl = document.querySelectorAll('.Women');
women.addEventListener('click',() => {
    cards.forEach(womanclass =>{
           womanclass.style.display = 'none'
           womemcl.forEach(showwomen =>{
            showwomen.style.display = 'block'
           });
    });
});

let kidcl = document.querySelectorAll('.Kids');
kids.addEventListener('click',() => {
    cards.forEach(kidsclass =>{
           kidsclass.style.display = 'none'
           kidcl.forEach(showkids =>{
            showkids.style.display = 'block'
           });
    });
});




