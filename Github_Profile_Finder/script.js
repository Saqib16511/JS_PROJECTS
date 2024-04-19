const search = document.querySelector('.search');
const api = 'https://api.github.com/users/'
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

async function fetchapi(){
    const response = await fetch(`${api}${search.value}`);
    const result = await response.json()
    // console.log(result)
    if(result){
        container.innerHTML = ''
        renderapi(result);
        
    }
};

function renderapi(index){
    let thumb = document.createElement('img');
    container.appendChild(thumb);
     thumb.src = index.avatar_url;
     let name = document.createElement('p');
     container.appendChild(name);
     name.textContent = index.name;
     let bio = document.createElement('p');
     container.appendChild(bio);
     bio.textContent = index.bio;



}

btn.addEventListener('click',fetchapi)