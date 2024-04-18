const api = 'https://dummyjson.com/posts';
const postscontainer = document.querySelector('.posts-container');
const progressBar = document.querySelector('.progress-bar')

async function fetchapi(){
    let response = await fetch(api);
    let result = await response.json()
    // console.log(result.posts)
    renderapi(result.posts)
}
fetchapi();

function renderapi(result){
    result.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('wrapperdiv')
        let label = document.createElement('label')
        label.innerHTML = element.title;
        let p = document.createElement('p');
        p.innerHTML = element.body
        div.appendChild(label);
        div.appendChild(p);
        postscontainer.appendChild(div)
        // console.log(label)
    });
};

window.onscroll = function(){
    handlescroll();
    // console.log('hello')
};
function handlescroll(){
    const scrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    // console.log('scrollTop' +document.documentElement.scrollTop);
    // console.log('clientH' + document.documentElement.clientHeight)
    // console.log('ScrollH' + document.documentElement.scrollHeight)

    const percentagescrolled = (scrollFromTop/height) * 100;
    progressBar.style.width = `${percentagescrolled}%`
    // console.log(percentagescrolled) 
}