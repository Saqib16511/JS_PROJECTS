const container = document.querySelector('.container');
let skip = 0

// Fetch Api
async function fetchapi(){
    const api = `https://dummyjson.com/products?limit=10&skip=${skip == 0 ? 0 : skip * 10}`;
    let response = await fetch(api);
    let result = await response.json();
    console.log(result.products);
    renderapi(result.products)
};
fetchapi();

function renderapi(index){
    index.forEach(item=>{
        // Card Container
        let cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        container.appendChild(cardContainer)
        
        // upper Div
        let updiv = document.createElement('div');
        updiv.classList.add('updiv');
        let thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        updiv.appendChild(thumbnail);
        let img = document.createElement('img');
        img.src = item.thumbnail
        thumbnail.appendChild(img)
        cardContainer.appendChild(updiv);

        // Middle Div
        let middiv = document.createElement('div');
        middiv.classList.add('middiv');
        let title = document.createElement('div');
        title.classList.add('title');
        middiv.appendChild(title);
        let h3 = document.createElement('h3');
        h3.innerHTML = item.title
        title.appendChild(h3);
        let price = document.createElement('div');
        price.classList.add('price');
        price.innerHTML = '$'+item.price;
        middiv.appendChild(price);
        
        
        cardContainer.appendChild(middiv);

        // Lower Div
        let lowderiv = document.createElement('div');
        lowderiv.classList.add('lowderiv');
        let context = document.createElement('div');
        context.classList.add('context');
        context.innerHTML = item.description
        lowderiv.appendChild(context)
        cardContainer.appendChild(lowderiv);
        
        
        let cartdiv = document.createElement('div');
        cartdiv.classList.add('cartdiv');
        cardContainer.appendChild(cartdiv);
        let btn = document.createElement('button');
        btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Add to Cart';
        cartdiv.appendChild(btn);
        
    })
    // Click Button on show more btn
    const show = document.querySelector('.showmore');
    show.addEventListener('click',()=>{
        skip++;
        fetchapi();
    })
}