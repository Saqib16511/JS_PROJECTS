const apiurl = "https://jsonplaceholder.typicode.com/posts";
const postlistcontainer = document.querySelector(".post-list-container");

function fetchusingXHR(){
    const  xhr = new XMLHttpRequest();
    xhr.open("GET",apiurl);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = ()=>{
        if(xhr.status === 200 ){
            displayresult(xhr.response)
        }else{
            console.log('some Error ocurred')
        }
    }
};
function displayresult(post){
    postlistcontainer.innerHTML = post.map((postitem)=>`
    <div class="post-item">
    <h3>${postitem.title}</h3>
    <p>${postitem.body}</p>
    </div>`
    ).join("");  
};

function fetchmethod(){
    const fetchrequest = fetch(apiurl);
    fetchrequest.then(response=> response.json()).then((result)=>displayresult(result)).catch((e)=>console.log(e));
};

async function fetchusingasyncawait(){
    const response = await fetch(apiurl);
    const result = await response.json();
    displayresult(result)
}

// fetchmethod()
// fetchusingXHR()
fetchusingasyncawait()