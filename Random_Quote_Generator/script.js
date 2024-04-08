const api = 'http://api.quotable.io/quotes/random'
const card = document.querySelector('.card');
const btn = document.getElementById("btn");

async function fetchquoteapi(){
    try {
        const response = await fetch(api);
        const result = await response.json()
        // console.log(result[0].author);
        printapi(result[0])
    } catch (error) {
        console.log(error)
    }
};

fetchquoteapi();

btn.addEventListener('click',()=>{
    window.location.reload()
})
function printapi(print){
    const content = print.content;
    const author = print.author;
    const contdiv = document.createElement('div');
    contdiv.classList.add('content');
    contdiv.textContent = content;
    
    const authordiv = document.createElement('div');
    authordiv.classList.add('author');
    authordiv.textContent = author;
    console.log(authordiv)

    // card.appendChild(contdiv);

    card.append(contdiv);
    card.append(authordiv);
}