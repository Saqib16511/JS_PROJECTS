const container = document.querySelector(".container");
let skip = 0;
async function getproducts(){
    try {
        const api = `https://dummyjson.com/products?limit=10&skip=${skip == 0 ? 0 : skip * 10}`;
        const response = await fetch(api);
        const result = await response.json()
        // console.log(result)
        appendincontainer(result)
    } catch (error) {
        container.innerHTML = 'LOL'
        console.log(error)
    }
};
getproducts();

function appendincontainer(getresult){
    // console.log(getresult.products)
    const myProducts = getresult.products;
    myProducts.forEach(prod => {
        // console.log(prod)
        // Card Body
        const cardbody = document.createElement('div');
        cardbody.className = "cardBody"
        // Thumbnail Div
        const thumbnail = document.createElement('div');
        thumbnail.className = "thumbnail"
        // Img Div
        const img = document.createElement('img');
        img.src = prod.thumbnail;
        thumbnail.append(img);
        
        // Title Div
        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = prod.title
        // Price
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = '$'+prod.price
        // Description Div
        const descript = document.createElement('div');
        descript.className = 'descript'
        descript.textContent = prod.description
        // ID
        const id = document.createElement('div');
        id.className = 'id';
        id.textContent = prod.id

        // AppendChilds in CardBody
        cardbody.app(thumbnail);
        cardbody.append(title);
        cardbody.append(price);
        cardbody.append(descript);
        cardbody.append(id)
        // AppendChild in COntainer
        container.append(cardbody);
        
    });
    
};
document.getElementById("btn").addEventListener('click',()=>{
    skip++;
    getproducts();

})